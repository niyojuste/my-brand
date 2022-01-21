document.querySelector('main').style.padding = '5vh 10vw'
const main = document.querySelector('main')

let posts = localStorage.getItem('posts')
	? JSON.parse(localStorage.getItem('posts'))
	: []

const active = localStorage.getItem('active')

if (active) {
	const login = document.querySelector('button')
	login.textContent = "logout"
	login.addEventListener('click', function () {
		localStorage.removeItem('active')
		location.href = '/my-brand/'
	})
}

posts.forEach((post) => {
	const title = document.createElement('h2')
	title.appendChild(document.createTextNode(post.title))

	const header = document.createElement('header')
	header.appendChild(title)

	const body = document.createElement('p')
	body.appendChild(document.createTextNode(post.body))
	body.style.maxHeight = '6vh'
	body.style.height = 'auto'
	body.style.overflow = 'hidden'
	body.style.whiteSpace = 'nowrap'
	body.style.textOverflow = 'ellipsis'

	const postDiv = document.createElement('div')
	postDiv.className = 'post'
	postDiv.appendChild(title)
	postDiv.appendChild(body)

	const likeIcon = document.createElement('object')
	likeIcon.data = '/my-brand/assets/img/like_rating_up_icon.svg'
	likeIcon.type = 'image/svg+xml'

	const likes = document.createElement('p')
	likes.appendChild(document.createTextNode(post.likes.length))
	likes.style.marginTop = '0'

	const commentIcon = document.createElement('object')
	commentIcon.data = '/my-brand/assets/img/comment_icon.svg'
	commentIcon.type = 'image/svg+xml'

	const comments = document.createElement('p')
	comments.appendChild(document.createTextNode(post.comments.length))
	comments.style.marginTop = '0'

	const reactionsDiv = document.createElement('div')
	reactionsDiv.className = 'reactions'
	reactionsDiv.appendChild(likeIcon)
	reactionsDiv.appendChild(likes)
	reactionsDiv.appendChild(commentIcon)
	reactionsDiv.appendChild(comments)

	const article = document.createElement('article')
	article.appendChild(postDiv)
	article.appendChild(reactionsDiv)
	article.style.height = '20vh'

	const link = document.createElement('a')
	link.href = 'article.html'
	link.appendChild(article)
	link.addEventListener('click', function () {
		sessionStorage.setItem('article', JSON.stringify(post.id))
	})

	main.appendChild(link)
	main.style.paddingBottom = '8rem'
})
