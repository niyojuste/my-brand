// const urlParams = new URLSearchParams(location.search)
// const username = urlParams.get('username')
let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

	const id = localStorage.getItem('active')
	
	if(!id) {
		location.href = 'signup.html'
	}

	const user = arr.find((user) => user.id.match(id))
	const index = arr.findIndex((user) => user.id.match(id))
	const button = document.getElementById('location')

button.addEventListener('click', function() {
	navigator.geolocation.getCurrentPosition(function(position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude
        
		arr[index] = {...user, 
			"location": {
				"latitude": latitude, 
				"longitude": longitude
			}
		}
		localStorage.setItem('users', JSON.stringify(arr))
		location.href = '/my-brand/blog/landing.html'
	})    
})

const homeBtn = document.getElementById('home')
homeBtn.addEventListener('click', function(e) {
	e.preventDefault()

	location.href = '/my-brand/blog/landing.html'
})