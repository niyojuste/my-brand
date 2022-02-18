const post = sessionStorage.getItem('post')
const reqHeader = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`,
	},
}

fetch(`https://juste-my-brand.herokuapp.com/api/posts/${post}`, reqHeader)
	.then((response) => response.json())
	.then((post) => {
		const title = document.createElement('h2')
		if (!post) {
			title.appendChild(document.createTextNode('No article'))
		} else {
			title.appendChild(document.createTextNode(post.title))
		}

		const body = document.createElement('p')
		body.innerHTML = `${post.body.replaceAll('\n', '<br>')}`

		const image = document.createElement('img')
		image.src = post.image
		const picture = document.createElement('picture')
		picture.appendChild(image)

		const content = document.getElementById('post')
		content.appendChild(title)
		content.appendChild(picture)
		content.appendChild(body)

		const likesCount = document.createElement('h3')
		likesCount.appendChild(document.createTextNode(post.likes.length))
		const likes = document.createElement('p')
		likes.appendChild(document.createTextNode('Likes'))

		const commentsCount = document.createElement('h3')
		commentsCount.appendChild(document.createTextNode(post.comments.length))
		const comments = document.createElement('p')
		comments.appendChild(document.createTextNode('Comments'))

		const reactions = document.getElementById('reactions')
		reactions.appendChild(likesCount)
		reactions.appendChild(likes)
		reactions.appendChild(commentsCount)
		reactions.appendChild(comments)
	})

function deletePost() {
	reqHeader.method = 'DELETE'

	fetch(`https://juste-my-brand.herokuapp.com/api/posts/${post}`, reqHeader)
		.then((response) => response.json())
		.then((result) => {
			sessionStorage.removeItem('post')

			const back = document.createElement('button')
			back.appendChild(document.createTextNode('Back'))
			back.addEventListener('click', function () {
				history.back()
			})

			const message = document.createElement('p')
			message.appendChild(document.createTextNode(result.message))

			const section = document.querySelector('section')
			section.className = 'card'
			section.innerHTML = ''
			section.appendChild(message)
			section.appendChild(back)
		})
}
