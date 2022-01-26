const allQueries = getLocalArrayOf('queries')
const allPosts = getLocalArrayOf('posts')
const allUsers = getLocalArrayOf('users')

const queriesTotal = document.getElementById('queries')
const postsTotal = document.getElementById('posts')
const usersTotal = document.getElementById('users')

queriesTotal.appendChild(document.createTextNode(allQueries.length))
postsTotal.appendChild(document.createTextNode(allPosts.length))
usersTotal.appendChild(document.createTextNode(allUsers.length))
