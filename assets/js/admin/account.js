const user = localStorage.getItem('active') ? JSON.parse(localStorage.getItem('active')) : {}

if(!user.username.match('Yusto')) {
    location.href = '/my-brand/login/login.html'
}