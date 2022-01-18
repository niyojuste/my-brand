let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

function login() {
    const username = document.querySelector("[name='name'")

    const user = arr.find((user) => user.username === username)

    if(user) {
        sessionStorage.setItem('user', JSON.stringify(user))
        history.back()
    }
}