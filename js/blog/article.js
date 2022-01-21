document.querySelector('main').style.padding = '5vh 10vw'

const article = sessionStorage.getItem('article')
let posts = localStorage.getItem('posts')
	? JSON.parse(localStorage.getItem('posts'))
	: []

const active = localStorage.getItem('active')

if (active) {
	// const user = JSON.parse(active)
	const login = document.querySelector('button')
	login.textContent = "logout"
	login.addEventListener('click', function () {
		localStorage.removeItem('active')
		location.href = '/my-brand/'
	})
}

const post = posts.find((post) => article.match(post.id))

const title = document.getElementById('title')
title.appendChild(document.createTextNode(post.title))

const body = document.getElementById('body')
body.innerHTML = `${post.body.replaceAll('\n', '<br>')}`

const likes = document.getElementById('likes')
likes.appendChild(document.createTextNode(post.likes.length))

const comments = document.getElementById('comments')
comments.appendChild(document.createTextNode(post.comments.length))

const textarea = document.querySelector("[name='comment']")

post.comments.forEach((comment) => {
	const content = document.createElement('p')
	content.appendChild(document.createTextNode(comment))

	const commentDiv = document.createElement('div')
	commentDiv.appendChild(content)

	const commentSection = document.querySelector('form')
	commentSection.prepend(commentDiv)
})

function addComment() {
	if (!localStorage.getItem('active')) {
		location.href = '/my-brand/login/login.html'
	} else {
		post.comments = post.comments.push(textarea.value)
		const index = posts.findIndex((element) => element.id.match(post.id))

		posts[index] = post
		localStorage.setItem('posts', JSON.stringify(posts))
		history.go(0)
	}
}

// function Comment() {

//     const likeIcon = document.createElement('object')
//     likeIcon.data = '/my-brand/img/like_rating_up_icon.svg'
//     likeIcon.type = 'image/svg+xml'

//     const likes = document.createElement('p')
//     likes.appendChild(document.createTextNode(post.likes.length))
//     likes.style.marginTop = '0'

		// const commentIcon = document.createElement('object')
		// commentIcon.data = '/my-brand/img/comment_icon.svg'
		// commentIcon.type = 'image/svg+xml'

//     // const comments = document.createElement('p')
//     // comments.appendChild(document.createTextNode(post.comments.length))
//     // comments.style.marginTop = '0'

//     const likesDiv = document.createElement('div')
//     likesDiv.className = 'likes'
//     likesDiv.appendChild(likeIcon)
//     likesDiv.appendChild(likes)
    // likesDiv.style.width = '7.5vh'

//     // reactionsDiv.appendChild(commentIcon)
//     // reactionsDiv.appendChild(comments)
// // }

// // const article = document.createElement('article')
// // article.appendChild(postDiv)
// // article.appendChild(reactionsDiv)
// // article.style.height = '20vh'

// // const link = document.createElement('a')
// // link.href = 'article.html'
// // link.appendChild(article)
// // link.addEventListener('click', function () {
// // 	sessionStorage.setItem('article', JSON.stringify(post))
// // })

// // main.appendChild(link)
// // main.style.paddingBottom = '8rem'
