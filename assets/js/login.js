if (active) {
	history.back()
}

let users = getLocalArrayOf('users')

const form = document.querySelector('form')
const errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', function (event) {
	event.preventDefault()

	errorMessage.style = `
		position: relative;
		z-index: 1;
		background-color: darkcyan;
		color: darkred;
		min-width: 80%;
		text-align: justify;
		padding: .5rem;
	`
	const inputs = Array.from(document.querySelectorAll('input'))

	if (inputs.every((input) => !input.value)) {
		errorMessage.innerHTML = '<strong>Type something</strong>'
		return form.prepend(errorMessage)
	}

	const email = document.querySelector("[name='email']").value
	const password = document.querySelector("[name='password']").value

	// const user = users.find((user) => user.username === username)

	// if(!user) {
	// 	errorMessage.textContent = 'Username not found'
	// 	return form.prepend(errorMessage)
	// }

	// if(user && !password.match(user.password)) {
	// 	errorMessage.textContent = 'Password incorrect'
	// 	return form.prepend(errorMessage)
	// }

	// localStorage.setItem('active', user.id)

	// if(user && user.id === users[0].id) {
	// 	return location.href = '/my-brand/admin/dashboard.html'
	// }`

	const header = {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({ email, password }),
		cache: 'default',
	}

	fetch('https://juste-my-brand.herokuapp.com/api/login', header)
		.then((response) => response.json())
		.then((data) => {
			localStorage.setItem('active', JSON.stringify(data))
			location.href = '/my-brand/blog/landing.html'
		})

	// return location.href = '/my-brand/'
})
