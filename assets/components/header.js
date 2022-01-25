console.log(document.querySelector('button'))

const homeLink = document.createElement('a')
homeLink.textContent = 'Home'
homeLink.href = '/my-brand/blog/landing.html'

const nav = document.createElement('div')

const active = localStorage.getItem('active')
const allUsers = getLocalArrayOf('users')
const thisUser = getFrom(allUsers, active)

const logBtn = document.createElement('button')

if(location.href.includes('/my-brand/blog/')) {
    if(active) {
        logBtn.textContent = `${thisUser.username}`
        logBtn.addEventListener('mouseover', function(e) {
            logBtn.textContent = 'logout'
        })
        logBtn.addEventListener('mouseleave', function(e) {
            logBtn.textContent = `${thisUser.username}`
        })
        logBtn.addEventListener('click', function () {
            localStorage.removeItem('active')
            location.href = '/my-brand/'
        })
    } else {
        logBtn.textContent = 'login'
        logBtn.addEventListener('click', function() {
            location.href = '/my-brand/login/login.html'
        })
    }
    nav.appendChild(logBtn)
} else if(!location.href.includes('/my-brand/login/')) {
    homeLink.href = '/my-brand/'
    
    const blog = document.createElement('a')
    blog.textContent = 'Blog'
    blog.href = '/my-brand/blog/landing.html'
    blog.style.fontWeight = '700'
    nav.insertAdjacentElement('afterbegin', blog)
    
    const contact = document.createElement('a')
    contact.textContent = 'Contact me'
    contact.href = location.href + '#contact'
    nav.insertAdjacentElement('afterbegin', contact)
    
    const about = document.createElement('a')
    about.textContent = 'About me'
    about.href = location.href + 'about.html'
    nav.insertAdjacentElement('afterbegin', about)
    
    const services = document.createElement('a')
    services.textContent = 'Services'
    services.href = location.href + '#services'
    nav.insertAdjacentElement('afterbegin', services)
    
    
    if(active) {
        logBtn.textContent = `${thisUser.username}`
        logBtn.addEventListener('click', function() {
            localStorage.removeItem('active')
            location.href = '/my-brand/login/login.html'
        })
        nav.insertAdjacentElement('beforeend', logBtn)
    }
}

nav.insertAdjacentElement('afterbegin', homeLink)

const rootLink = document.createElement('a')
rootLink.textContent = 'JN'
rootLink.href = '/my-brand/'

const header = document.createElement('header')
header.className = 'lg-screen'
header.appendChild(rootLink)
header.appendChild(nav)

const headerStyle = `
<style>
    header {
        box-sizing: border-box;
        position: fixed;
        top: 0;
        z-index: 1;
        padding: 0 2.5vw;
        width: 100vw;
        height: 10vh;
        background-color: var(--main-background-color);
        box-shadow: 0 .2rem 20px -20px var(--alternate-background-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header button {
        width: auto;
        height: 7.5vh;
        padding: 0 1.5rem;
        background-color: var(--main-background-color);
        color: var(--alternate-background-color);
        border: 2px solid var(--alternate-background-color);
        border-radius: 40px;
        transition: .3s;
        font-size: 1rem;
    }

    header button:hover {
        background-color: var(--alternate-background-color);
        color: var(--main-background-color);
        transition: .5s;
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 0 .5rem;
        vertical-align: center;
    }
</style>
`
header.insertAdjacentHTML('afterbegin', headerStyle)

class Header extends HTMLElement {
	constructor() {
		super()

		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.appendChild(header)
	}

}

customElements.define('header-component', Header)
