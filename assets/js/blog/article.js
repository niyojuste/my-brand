document.querySelector('main').style.padding = '5vh 10vw'

const article = sessionStorage.getItem('article')
let posts = getLocalArrayOf('posts')

const post = getFrom(posts, article)
const postIndex = getIndexOf(posts, post.id)

const likeBlank = "M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"
const likeFill = "M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"
const likeSVG = document.querySelector('.like')
const likePath = likeSVG.firstElementChild

const title = document.getElementById('title')
title.appendChild(document.createTextNode(post.title))

const body = document.getElementById('body')
body.innerHTML = `${post.body.replaceAll('\n', '<br>')}`

if(post.likes.includes(active)) {
	likePath.setAttribute('d', likeFill)
}

const likes = document.getElementById('likesCount')
likes.appendChild(document.createTextNode(post.likes.length))

const comments = document.getElementById('commentsCount')
comments.appendChild(document.createTextNode(post.comments.length))

const commentSection = document.querySelector('.comments')

post.comments.forEach((comment) => {
	const content = document.createElement('p')
	content.appendChild(document.createTextNode(comment.comment))

	const users = getLocalArrayOf('users')
	const user = getFrom(users, comment.user)
	
	const username = document.createElement('h4')
	username.textContent = `${user.username}`
	username.style.margin = '0'

	const time = document.createElement('p')
	const d = new Date(comment.time)
	time.appendChild(document.createTextNode(`${d.getDate()}  ${new Intl.DateTimeFormat('en-GB', {month: 'short'}).format(d)}`))
	time.appendChild(document.createTextNode(` ${d.getFullYear() !== new Date().getFullYear() ? d.getFullYear() : ''}`))
	time.style = `
		margin: 0 1rem;
	`
	
	const ownerDiv = document.createElement('div')
	ownerDiv.appendChild(username)
	ownerDiv.appendChild(time)
	ownerDiv.className = 'owner'
	ownerDiv.style = `
		display: flex;
		align-items: baseline;
	`
	
	const commentDiv = document.createElement('div')
	commentDiv.appendChild(ownerDiv)
	commentDiv.appendChild(content)
	commentDiv.style = `
		margin-top: 2.24rem;
		margin-bottom: 2.24rem;
	`
	
	commentSection.appendChild(commentDiv)
})

const commentForm = document.querySelector('form')
const textarea = document.querySelector("textarea")

commentForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!localStorage.getItem('active')) {
		location.href = '/my-brand/login/login.html'
	} else {
		const userComment = {
			"user": active,
			"time": new Date().getTime(),
			"comment": textarea.value
		}
		post.comments.push(userComment)

		posts[postIndex] = post
		localStorage.setItem('posts', JSON.stringify(posts))
		history.go(0)
	}
})

likeSVG.addEventListener('click', function (e) {
	e.preventDefault()

	if(post.likes.includes(active)) {
		const likeIndex = getIndexOf(post.likes, active) 
		posts[postIndex].likes.splice(likeIndex, 1)

		localStorage.setItem('posts', JSON.stringify(posts))

		likes.textContent = posts[postIndex].likes.length
		likePath.setAttribute('d', likeBlank)
		return 
	}

	posts[postIndex].likes.push(active)

	localStorage.setItem('posts', JSON.stringify(posts))
	
	likePath.setAttribute('d', likeFill)
	likes.textContent = posts[postIndex].likes.length
})

