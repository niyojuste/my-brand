let queries = localStorage.getItem('queries') ? JSON.parse(localStorage.getItem('queries')) : []

const totalQueries = document.createElement('h3')
totalQueries.appendChild(document.createTextNode(queries.length))

const queriesDisplay = document.getElementById('queries')
queriesDisplay.appendChild(totalQueries)

queries.forEach((query) => {

    const date = document.createElement('td')
    date.appendChild(document.createTextNode(query.date))

    const user = document.createElement('td')
    user.appendChild(document.createTextNode(query.user))

    const content = document.createElement('td')
    content.appendChild(document.createTextNode(query.query))
    
    const tr =  document.createElement('tr')    
    tr.appendChild(content)
    tr.appendChild(user)
    tr.appendChild(date)
    
    const tbody = document.querySelector('tbody')
    tbody.appendChild(tr)
});