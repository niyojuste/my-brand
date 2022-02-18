const admin = localStorage.getItem('active') ? JSON.parse(localStorage.getItem('active')) : ''

if(!admin.user.role) {
    location.href = '/my-brand/login/login.html'
}

const token = admin.token