let posts = localStorage.getItem('posts')
	? JSON.parse(localStorage.getItem('posts'))
	: []

function addPost() {
    const title = document.querySelector("[name='title']").value
    const body = document.querySelector("[name='body']").value
    const time = new Date().getTime()

    const post = {
        id: time.toFixed(),
        title,
        body,
        time,
        likes: [],
        comments: []
    }

    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts))
}

function updatePost() {
    let post = JSON.parse(sessionStorage.getItem('post'))
    const title = document.querySelector("[name='title']")
    const body = document.querySelector("[name='body']")
    const time = new Date().getTime()

    title.value = post.title
    body.value = post.body

    post = {
        title,
        body,
        time,
        likes: [],
        comments: []
    }

    console.log(post)
    
    const index = posts.findIndex((element) => element.id.match(post.id))
    posts[index] = post
    localStorage.setItem('posts', JSON.stringify(posts))
}