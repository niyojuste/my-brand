const localQueries = localStorage.getItem('queries')
let queries = localQueries ? JSON.parse(localQueries) : []

const form = document.querySelector('form')
const errorMessage = document.getElementById('errorMessage')

form.addEventListener('submit', function (e) {
	e.preventDefault() 

	errorMessage.style = `
		background-color: darkcyan;
		color: darkred;
		min-width: 80%;
		text-align: justify;
		padding: .5rem;
	`
	const inputs = Array.from(document.querySelectorAll('input'))

	if (inputs.every((input) => !input.value)) {
		errorMessage.innerHTML = '<strong>Type something</strong>'
		return form.prepend(errorMessage)
	}
	
	inputs.filter((input) => (input.value = input.value.trim()))
	
	let empties = []
	
	inputs.forEach((input) => {
		if (!input.value) {
			empties.push(' ' + input.placeholder)
		}
	})
	
	if (empties.length !== 0) {
		errorMessage.innerHTML = `<strong>${empties}</strong> can not be empty`
		return form.prepend(errorMessage)
	}

	const email = document.querySelector("[name='email']").value

	if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		errorMessage.innerHTML = '<strong>Email</strong> seems to be invalid'
		return form.prepend(errorMessage)
	}

	const tel = document.querySelector("input[type='tel']").value

	if(tel.length > 10) {
		errorMessage.innerHTML = "Phone number too long"
	}
	
	const name = document.querySelector("input[type='text']").value
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

	errorMessage.textContent = "Thank you"
	errorMessage.style.color = 'black'
})
