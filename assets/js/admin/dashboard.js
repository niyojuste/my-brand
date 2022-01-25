let queries = localStorage.getItem('queries')
	? JSON.parse(localStorage.getItem('queries'))
	: []
let posts = localStorage.getItem('posts')
	? JSON.parse(localStorage.getItem('posts'))
	: []
let users = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: []

const queriesTotal = document.getElementById('queries')
const postsTotal = document.getElementById('posts')
const usersTotal = document.getElementById('users')

queriesTotal.appendChild(document.createTextNode(queries.length))
postsTotal.appendChild(document.createTextNode(posts.length))
usersTotal.appendChild(document.createTextNode(users.length))
