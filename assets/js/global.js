console.log('here')

function getLocalArrayOf(str) { 
    return localStorage.getItem(str) ? JSON.parse(localStorage.getItem(str)) : []
}

function getLocalIdOf(str) { 
    return localStorage.getItem(str) ? JSON.parse(localStorage.getItem(str)) : undefined
}

function getFrom(arr, id) {
    return arr.find(item => item.id === id)
}

function getIndexOf(arr, id) {
    return arr.findIndex(item => item.id === id)
}


