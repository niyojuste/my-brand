const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
    <style>
        footer {
            box-sizing: border-box;
            background: #262220;
            color: var(--main-background-color);
            padding: 0 2.5vw;
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: space-between;
        }

        .socials {
            display: flex;
            align-items: center;
        }
        
        .socials object {
            width: 1.5rem;
        }
    </style>
    <footer>
        <p>Juste Niyonteze &copy;2022</p>
        <div class="socials">
            <object data="/img/github__icon.svg" type="image/svg+xml">
                Your browser doesn't support svg
            </object>
            <object data="/img/twitter_bird_icon.svg" type="image/svg+xml">
                Your browser doesn't support svg
            </object>
        </div>
    </footer>
`

class Footer extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.appendChild(footerTemplate.content)
	}
}

customElements.define('footer-component', Footer)
