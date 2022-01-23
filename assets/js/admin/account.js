const active = localStorage.getItem('active')
const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
const user = users.find((element) => active === element.id.toString())

if(!user.username.match('Yusto')) {
    location.href = '/my-brand/login/login.html'
}