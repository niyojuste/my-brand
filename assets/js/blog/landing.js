document.querySelector('main').style.padding = '5vh 10vw'
const main = document.querySelector('main')

const commentSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z"/></svg>`
const likeBlankSVG = `<svg  class="like" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z"/></svg>`
const likeFillSVG = `<svg class="like" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"/></svg>`
const likeBlank =
	'M21.406 9.558c-1.21-.051-2.87-.278-3.977-.744.809-3.283 1.253-8.814-2.196-8.814-1.861 0-2.351 1.668-2.833 3.329-1.548 5.336-3.946 6.816-6.4 7.401v-.73h-6v12h6v-.904c2.378.228 4.119.864 6.169 1.746 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.648-1.168-2.446-2.594-2.506zm-17.406 10.442h-2v-8h2v8zm15.896-5.583s.201.01 1.069-.027c1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.239-.965-4.438-1.934-6.959-2.006v-6c3.264-.749 6.328-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.024 1.455-.051 1.584l-1.394.167s-.608 1.111.142 1.116z'
const likeFill =
	'M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z'

const reqHeader = {
	method: 'GET',
	headers: {
		'Content-type': 'application/json',
		Accept: 'application/json',
	},
}

fetch('https://juste-my-brand.herokuapp.com/api/posts', reqHeader)
	.then((response) => response.json())
	.then((posts) => {
		posts.forEach((post) => {
			const title = document.createElement('h2')
			title.appendChild(document.createTextNode(post.title))

			const header = document.createElement('header')
			header.appendChild(title)

			const body = document.createElement('p')
			body.appendChild(document.createTextNode(post.body))
			body.style.maxHeight = '6vh'
			body.style.height = 'auto'
			body.style.overflow = 'hidden'
			body.style.whiteSpace = 'nowrap'
			body.style.textOverflow = 'ellipsis'

			const article = document.createElement('article')
			article.appendChild(title)
			article.appendChild(body)

			const likes = document.createElement('p')
			likes.appendChild(document.createTextNode(post.likes.length))
			likes.style.marginTop = '0'

			const comments = document.createElement('p')
			comments.appendChild(document.createTextNode(post.comments.length))
			comments.style.marginTop = '0'

			const reactionsDiv = document.createElement('div')
			reactionsDiv.className = 'reactions'
			reactionsDiv.id = `${post._id}`
			reactionsDiv.appendChild(likes)
			if (post.likes.includes(active)) {
				likes.insertAdjacentHTML('beforebegin', likeFillSVG)
			} else {
				likes.insertAdjacentHTML('beforebegin', likeBlankSVG)
			}

			reactionsDiv.appendChild(comments)
			comments.insertAdjacentHTML('beforebegin', commentSVG)

			article.addEventListener('click', function () {
				sessionStorage.setItem('article', post._id)
				location.href = 'article.html'
			})

			const postDiv = document.createElement('div')
			postDiv.className = 'post'
			postDiv.appendChild(article)
			postDiv.appendChild(reactionsDiv)
			postDiv.style = `
				height: 20vh;
				margin-bottom: 2rem;
			`

			main.appendChild(postDiv)
		})

		const likeSVGs = document.querySelectorAll('.like')
		likeSVGs.forEach((svg) => {
			svg.addEventListener('click', function (e) {
				e.preventDefault()

				const postId = svg.parentElement.id
				const post = posts.find((element) => postId.match(element.id))
				const postIndex = posts.findIndex((element) =>
					postId.match(element.id)
				)

				if (active) {
					if (svg.firstElementChild.getAttribute('d') === likeFill) {
						const likeIndex = post.likes.findIndex(
							(like) => like === active
						)
						posts[postIndex].likes.splice(likeIndex, 1)

						localStorage.setItem('posts', JSON.stringify(posts))

						svg.nextElementSibling.textContent =
							posts[postIndex].likes.length
						svg.firstElementChild.setAttribute('d', likeBlank)
						return
					} else if (
						svg.firstElementChild.getAttribute('d') === likeBlank
					) {
						posts[postIndex].likes.push(active)

						localStorage.setItem('posts', JSON.stringify(posts))

						svg.firstElementChild.setAttribute('d', likeFill)
						svg.nextElementSibling.textContent =
							posts[postIndex].likes.length
					}
				}
			})
		})
	})
