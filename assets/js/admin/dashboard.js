const reqHeader = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`,
	},
}

fetch('https://juste-my-brand.herokuapp.com/api/queries', reqHeader)
	.then((response) => response.json())
	.then((queries) => {
		const queriesTotal = document.getElementById('queries')
		queriesTotal.appendChild(document.createTextNode(queries.length))
	})

fetch('https://juste-my-brand.herokuapp.com/api/posts', reqHeader)
	.then((response) => response.json())
	.then((posts) => {
		const postsTotal = document.getElementById('posts')
		postsTotal.appendChild(document.createTextNode(posts.length))
	})

fetch('https://juste-my-brand.herokuapp.com/api/users', reqHeader)
	.then((response) => response.json())
	.then((users) => {
		const usersTotal = document.getElementById('users')
		usersTotal.appendChild(document.createTextNode(users.length))
	})
