const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
    <style>
        header {
            position: fixed;
            top: 0;
            z-index: 1;
            width: 100vw;
            height: 10vh;
            background-color: var(--main-background-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        a {
            text-decoration: none;
            color: inherit;
            padding: 0 .5rem;
        }

        .sm-screen {
            display: none;
        }
        
        /*
        @media (min-width: 1024px) {
            .lg-screen {
                display: flex;
            }

            .sm-screen {
                display: none;
            }
        }
        */

        .sideNav {
            width: 0;
            position: fixed:
            top: 0;
            right: 0;
            z-index: 1;
            min-height: 100%;
            background-color: var(--main-background-color);
        }
                
    </style>

    <header class="sm-screen">
        <nav id="menu" class="sideNav">
            <a 
                href="javascript:void(0)" 
                class="closeBtn" 
            >
                &times;
            </a>
            
            <a href="/">Home</a>
            <a href="#">Services</a>
            <a href="/about.html">About me</a>
            <a href="/blog/landing.html">Blog</a>
            <a href="#">Contact me</a>
            
        </nav>
        <a href="/">JN</a>
        <span 
            class="menuBtn"
        >
            &#9776;
        </span>
    </header>
    <header class="lg-screen">
        <a href="/">Juste Niyonteze</a>
        <nav>
            
            <a href="/">Home</a>
            <a href="#">Services</a>
            <a href="/my-brand/about.html">About me</a>
            <a href="/my-brand/blog/landing.html">Blog</a>
            <a href="#">Contact me</a>
            
        </nav>
    </header>
`

class Header extends HTMLElement {
	constructor() {
		super()

		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.appendChild(headerTemplate.content)
	}

	attributeChangedCallback(name, oldValue, newValue) {
		openMenu(this)
	}
}

customElements.define('header-component', Header)

function openMenu(elem) {
	const shadow = elem.shadowRoot
	document.querySelector('.menuBtn').addEventListener('click', function () {
		document.getElementById('menu').style.width = '40vw'
	})
}

// document.createElement('header-component')

// const menuBtn = document.querySelector('.menuBtn')
// const closeBtn = document.querySelector('.closeBtn')

// menuBtn.addEventListener('click', () => {
// })

// closeBtn.addEventListener('click',  () => {
//     document.getElementById('menu').style.width = '0'
// })
