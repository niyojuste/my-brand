const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
        }

        header {
            margin: 0;
            padding: 2vh;
            height: 10vh;
            width: 100%;
            background-color: var(--main-background-color);
            display: flex;
            justify-content: flex-start;
        }

        a {
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
    </style>
    <header>
        <a href="/my-brand/">Juste Niyonteze</a>
    </header>
`
class Header extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(headerTemplate.content)
    }
}

customElements.define('header-component', Header)