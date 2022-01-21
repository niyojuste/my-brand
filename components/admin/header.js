const headerTemplate = document.createElement('template')

headerTemplate.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
        }

        header {
            margin: 0;
            height: 10vh;
            width: 100%;
            background-color: var(--main-background-color);
        }
    </style>
    <header>

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