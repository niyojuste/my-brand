const footerTemplate = document.createElement('template')

footerTemplate.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
        }

        footer {
            width: 100%;
            height: 10vh;
            margin: 0;
            background-color: black;
        }
    </style>
    <footer>
        
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