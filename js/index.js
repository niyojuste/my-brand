const localQueries = localStorage.getItem('queries')
let queries = localQueries ? JSON.parse(localQueries) : []

function sendQuery() {
	const name = document.querySelector("input[type='text']").value
	const email = document.querySelector("input[type='email']").value
	const tel = document.querySelector("input[type='tel']").value
	const query = document.querySelector('textarea').value

	const singleQuery = {
		"user": {
			name,
			tel,
			email,
		},
        query,
        "date": new Date().getTime()
	}

    queries.push(singleQuery)
    localStorage.setItem('queries', JSON.stringify(queries))
}
