const logged = localStorage.getItem('active')
	? JSON.parse(localStorage.getItem('active'))
	: ''
const token = logged ? logged.token : ''
const active = logged ? logged.user._id : ''

if (!active) {
	location.href = 'signup.html'
}

const button = document.getElementById('location')

button.addEventListener('click', function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude

		const location = {
			latitude,
			longitude,
		}

		const locationHeader = {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ location }),
		}

		fetch(
			`https://juste-my-brand.herokuapp.com/api/users/${active}`,
			locationHeader
		)
			.then((response) => response.json())
			.then((location.href = '/my-brand/blog/landing.html'))
	})
})

const homeBtn = document.getElementById('home')
homeBtn.addEventListener('click', function (e) {
	e.preventDefault()

	location.href = '/my-brand/blog/landing.html'
})
