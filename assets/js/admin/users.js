// let users = localStorage.getItem('users')
// 	? JSON.parse(localStorage.getItem('users'))
// 	: []

const totalUsers = document.createElement('h3')
totalUsers.appendChild(document.createTextNode(users.length))

const usersDisplay = document.getElementById('users')
usersDisplay.appendChild(totalUsers)

users.forEach((user) => {
	const username = document.createElement('td')
	username.appendChild(document.createTextNode(user.username))

	const name = document.createElement('td')
	name.appendChild(document.createTextNode(user.name))

	const tr = document.createElement('tr')
	tr.appendChild(username)
	tr.appendChild(name)
    
	if (user.location) {
		const longitude = document.createElement('td')
		longitude.appendChild(document.createTextNode(user.location.longitude))

		const latitude = document.createElement('td')
		latitude.appendChild(document.createTextNode(user.location.latitude))
        tr.appendChild(longitude)
        tr.appendChild(latitude)
	}

	const tbody = document.querySelector('tbody')
	tbody.appendChild(tr)
})
