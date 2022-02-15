const active = localStorage.getItem('active')
const users = getLocalArrayOf('users')
const user = getFrom(users, active)

if(!user.username.match(users[0].username)) {
    location.href = '/my-brand/login/login.html'
}