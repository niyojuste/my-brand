let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

	
function signUp() {
	const name = document.querySelector("[name='name']").value
	const username = document.querySelector("[name='username']").value
	const password = document.querySelector("[name='password']").value
		if (arr.every((user) => username !== user.username)) {
			const user = {
				name,
				username,
				password,
			}

			arr.push(user)
			localStorage.setItem('users', JSON.stringify(arr))
		}
}
