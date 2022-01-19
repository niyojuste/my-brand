const urlParams = new URLSearchParams(location.search)
const username = urlParams.get('username')
let arr = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

    
function getLocation() {
    let user = arr.find((user) => username === user.username)
    
	navigator.geolocation.getCurrentPosition(function(position) {
		const latitude = position.coords.latitude
		const longitude = position.coords.longitude
        
		user['location'] = {
			"latitude": latitude, 
			"longitude": longitude
		}

        const index = arr.findIndex((user) => username === user.username)
        arr[index] = user

	})    
    localStorage.setItem('users', JSON.stringify(arr))
}
