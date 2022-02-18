const reqHeader = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		Authorization: `Bearer ${token}`,
	},
}

fetch('https://juste-my-brand.herokuapp.com/api/posts', reqHeader)
	.then((response) => response.json())
	.then((posts) => {
		const totalPosts = document.createElement('h3')
		totalPosts.appendChild(document.createTextNode(posts.length))

		const postsCard = document.getElementById('posts')
		postsCard.prepend(totalPosts)

		const totalLikes = document.createElement('h3')
		let likesCount = 0
		posts.forEach((post) => (likesCount += post.likes.length))
		totalLikes.appendChild(document.createTextNode(likesCount))

		const likesCard = document.getElementById('likes')
		likesCard.prepend(totalLikes)

		const totalComments = document.createElement('h3')
		let commentsCount = 0
		posts.forEach((post) => (commentsCount += post.comments.length))
		totalComments.appendChild(document.createTextNode(commentsCount))

		const commentsCard = document.getElementById('comments')
		commentsCard.prepend(totalComments)

		posts.forEach((post) => {
			const title = document.createElement('h3')
			title.appendChild(document.createTextNode(post.title))

			const body = document.createElement('p')
			body.appendChild(document.createTextNode(post.body))
			body.style = `
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			`

			const postCard = document.createElement('div')
			postCard.className = 'card'
			postCard.appendChild(title)
			postCard.appendChild(body)
			postCard.addEventListener('click', function () {
				sessionStorage.setItem('post', post._id)
				location.href = 'article.html'
			})

			const articles = document.querySelector('.articles')
			articles.prepend(postCard)
		})
	})
