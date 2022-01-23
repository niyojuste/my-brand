let posts = localStorage.getItem('posts')
	? JSON.parse(localStorage.getItem('posts'))
	: []

let post = JSON.parse(sessionStorage.getItem('post'))

const oldTitle = document.querySelector("[name='title']")
const oldBody = document.querySelector("[name='body']")

oldTitle.value = post.title
oldBody.value = post.body

function updatePost() {
    const title = oldTitle.value
    const body = oldBody.value
    const time = new Date().getTime()

	post = {...post, title, body, time}

	sessionStorage.setItem('post', JSON.stringify(post))

	const index = posts.findIndex((element) => element.id.match(post.id))
	posts[index] = post
	localStorage.setItem('posts', JSON.stringify(posts))
    // history.back()

    // const back = document.createElement('button')
	// back.appendChild(document.createTextNode('Go back'))
	// back.addEventListener('click', function () {
	// 	history.back()
	// })

	// const message = document.createElement('p')
	// message.appendChild(document.createTextNode('Updated'))

	// const section = document.createElement('section')
    // section.className = 'card'
	// section.innerHTML = ''
	// section.appendChild(message)
	// section.appendChild(back)
}
