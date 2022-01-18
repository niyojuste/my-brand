const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
    <style>
        footer {
            position: relative;
            y-index: 2;
            background: #262220;
            color: var(--main-background-color);
            width: 100%;
            height: 10vh;
            display: flex;
            justify-content: space-between;
        }
        
        .socials object {
            width: 1.5rem;
        }
    </style>
    <footer>
        <p>Juste Niyonteze &copy;2022</p>
        <div class="socials">
            <object data="/my-brand/img/github__icon.svg" type="image/svg+xml">
                Your browser doesn't support svg
            </object>
            <object data="/my-brand/img/twitter_bird_icon.svg" type="image/svg+xml">
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
