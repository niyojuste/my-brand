let article = sessionStorage.getItem('post')

const oldTitle = document.querySelector("[name='title']")
const oldBody = document.querySelector("[name='body']")

const reqHeader = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
	},
}

fetch(`https://juste-my-brand.herokuapp.com/api/posts/${article}`, reqHeader)
	.then((response) => response.json())
	.then((post) => {
		oldTitle.value = post.title
		oldBody.value = post.body

		const form = document.querySelector('form')

		form.addEventListener('submit', (e) => {
			e.preventDefault()

			const title = oldTitle.value
			const body = oldBody.value
			const image = document.querySelector("[name='image']")

			function updatePost(image) {
				const updateHeader = {
					method: 'PATCH',
					headers: {
						'Content-type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({ title, body, image }),
				}

				fetch(
					`https://juste-my-brand.herokuapp.com/api/posts/${article}`,
					updateHeader
				)
					.then((response) => response.json())
					.then((result) => {
						history.back()

						// const back = document.createElement('button')
						// back.appendChild(document.createTextNode('Go back'))
						// back.addEventListener('click', function () {
						// 	history.back()
						// })

						const message = document.createElement('p')
						message.appendChild(
							document.createTextNode(JSON.stringify(result))
						)

						const section = document.createElement('section')
						section.className = 'card'
						section.innerHTML = ''
						section.appendChild(message)
						// section.appendChild(back)
					})
			}

			if (image.files[0]) {
				const fileReader = new FileReader()
				fileReader.readAsDataURL(image.files[0])
				fileReader.addEventListener('loadend', (e) => {
					updatePost(e.target.result)
				})
			} else {
				updatePost()
			}
		})
	})
