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
		const totalQueries = document.createElement('h3')
		totalQueries.appendChild(document.createTextNode(queries.length))

		const total = document.createElement('p')
		total.appendChild(document.createTextNode('Queries'))

		const queriesDisplay = document.getElementById('queries')
		queriesDisplay.appendChild(totalQueries)
		queriesDisplay.appendChild(total)

		queries.forEach((query) => {
			const name = document.createElement('td')
			name.appendChild(document.createTextNode(query.name))

			const email = document.createElement('td')
			email.appendChild(document.createTextNode(query.email))

			const tel = document.createElement('td')
			tel.appendChild(document.createTextNode(query.tel))

			const content = document.createElement('td')
			content.appendChild(document.createTextNode(query.query))

			const tr = document.createElement('tr')
			tr.appendChild(content)
			tr.appendChild(name)
			tr.appendChild(email)
			tr.appendChild(tel)

			const tbody = document.querySelector('tbody')
			tbody.appendChild(tr)
		})
	})
