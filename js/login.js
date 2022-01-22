let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

function login() {
	const username = document.querySelector("[name='username'").value
	const password = document.querySelector("[name='password'").value

	console.log('user')
	const user = arr.find((user) => user.username === username)

	if (user && user.password.match(password)) {
		localStorage.setItem('active', JSON.stringify(user))
	}

	if(user && user.username.match('yusto')) {
		location.replace('/my-brand/admin/dashboard.html')
	}
}

