const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const title = document.querySelector("[name='title']").value
	const body = document.querySelector("[name='body']").value
	const image = document.querySelector("[name='image']")
	const fileReader = new FileReader()
	fileReader.readAsDataURL(image.files[0])
	fileReader.addEventListener('loadend', (e) => {
		const reqHeader = {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ title, body, image: e.target.result }),
		}

		fetch('https://juste-my-brand.herokuapp.com/api/posts', reqHeader)
			.then((response) => response.json())
			.then((result) => {
				console.log(result)
				sessionStorage.setItem('post', result._id)
				location.href = 'article.html'
			})
	})
})
