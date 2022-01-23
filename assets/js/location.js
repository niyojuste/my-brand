// const urlParams = new URLSearchParams(location.search)
// const username = urlParams.get('username')
let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

const button = document.querySelector('button')
	
button.addEventListener('click', function() {
    let signedUser = JSON.parse(localStorage.getItem('signed'))
    
	navigator.geolocation.getCurrentPosition(function(position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude
        
		signedUser['location'] = {
			"latitude": latitude, 
			"longitude": longitude
		}

        const index = arr.findIndex((user) => signedUser.username === user.username)
        arr[index] = signedUser

	})    
    localStorage.setItem('users', JSON.stringify(arr))
})
