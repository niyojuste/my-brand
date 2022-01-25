// const urlParams = new URLSearchParams(location.search)
// const username = urlParams.get('username')
let users = getLocalArrayOf('users')

const id = localStorage.getItem('active')

if (!id) {
	location.href = 'signup.html'
}

const user = getFrom(users, id)
const index = getIndexOf(users, id)
const button = document.getElementById('location')

button.addEventListener('click', function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude

		users[index] = {
			...user,
			location: {
				latitude: latitude,
				longitude: longitude,
			},
		}
		localStorage.setItem('users', JSON.stringify(users))
		location.href = '/my-brand/blog/landing.html'
	})
})

const homeBtn = document.getElementById('home')
homeBtn.addEventListener('click', function (e) {
	e.preventDefault()

	location.href = '/my-brand/blog/landing.html'
})
