let users = getLocalArrayOf('users')

const form = document.querySelector('form')
const errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', function (e) {
	e.preventDefault()

	errorMessage.style = `
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

	const name = document.querySelector("[name='name']").value
	const email = document.querySelector("[name='email']").value
	const username = document.querySelector("[name='username']").value
	const password = document.querySelector("[name='password']").value
	const passwordCheck = document.querySelector("[name='passwordCheck']").value

	if (users.find((user) => username === user.username)) {
		errorMessage.innerHTML = '<strong>Username</strong> already exists'
		return form.prepend(errorMessage)
	}

	if (password !== passwordCheck) {
		errorMessage.innerHTML = 'Enter the same <strong>password</strong>'
		return form.prepend(errorMessage)
	}

	if (password.match(/\s/)) {
		errorMessage.innerHTML =
			'<strong>Password</strong> can not contain spaces'
		return form.prepend(errorMessage)
	}

	if (password.toLowerCase().includes('password')) {
		errorMessage.innerHTML = `<strong>Password</strong> can not be "${password}"`
		return form.prepend(errorMessage)
	}

	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		errorMessage.innerHTML = '<strong>Email</strong> seems to be invalid'
		return form.prepend(errorMessage)
	}

	inputs.filter((input) => (input.value = input.value.trim()))

	let empties = []

	inputs.forEach((input) => {
		if (!input.value) {
			empties.push(' ' + input.placeholder)
		}
	})

	if (empties.length !== 0) {
		errorMessage.innerHTML = `<strong>${empties}</strong> can not be empty`
		return form.prepend(errorMessage)
	}

	const user = {
		name: name.trim(),
		email: email.trim(),
		username: username.trim(),
		password,
	}

	const header = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(user),
	}

	fetch('https://juste-my-brand.herokuapp.com/api/users', header)
		.then((response) => response.json())
		.then((data) => console.log(data))
	// users.push(user)
	// localStorage.setItem('users', JSON.stringify(users))
	// localStorage.setItem('active', user.id)

	// location.href = 'location.html'
})
