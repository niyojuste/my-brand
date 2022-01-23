const post = JSON.parse(sessionStorage.getItem('post'))

const title = document.createElement('h2')
if (!post) {
	title.appendChild(document.createTextNode('No article'))
} else {
	title.appendChild(document.createTextNode(post.title))
}

const body = document.createElement('p')
body.innerHTML = `${post.body.replaceAll('\n', '<br>')}`

const content = document.getElementById('post')
content.appendChild(title)
content.appendChild(body)

const likes = document.createElement('h3')
likes.appendChild(document.createTextNode(post.likes.length))

const comments = document.createElement('h3')
comments.appendChild(document.createTextNode(post.comments.length))

const reactions = document.getElementById('reactions')
reactions.appendChild(likes)
reactions.appendChild(comments)

function deletePost() {
	let posts = JSON.parse(localStorage.getItem('posts'))
	posts = posts.filter((element) => element.id !== post.id)
	localStorage.setItem('posts', JSON.stringify(posts))
	sessionStorage.removeItem('post')

	const back = document.createElement('button')
	back.appendChild(document.createTextNode('Go back'))
	back.addEventListener('click', function () {
		history.back()
	})

	const message = document.createElement('p')
	message.appendChild(document.createTextNode('Deleted'))

	const section = document.querySelector('section')
	section.className = 'card'
	section.innerHTML = ''
	section.appendChild(message)
	section.appendChild(back)
}
