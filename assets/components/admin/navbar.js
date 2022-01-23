const navTemplate = document.createElement('template')

navTemplate.innerHTML = `
<style>
    * {
        box-sizing: border-box;
    }

    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 17.5vw;
        height: 100%;
        padding: 10vh 4vh;
        background-color: var(--alternate-background-color);
        color: whitesmoke;
    }

    ul {
        padding-left: 1.5vw;
        margin-top: 1.4vh;
    }
    li, summary {
        list-style: none;
    }
    
    summary {
        font-weight: 600;
    }
    
    li {
        margin-bottom: 1.5vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

</style>
<nav>
    <a href="/my-brand/admin/dashboard.html">Dashboard</a>
    <details>
        <summary>Queries</summary>
        <a href="/my-brand/admin/queries.html">View</a>
        </details>
        <details>
        <summary>Blog</summary>
        <ul>
        <li><a href="/my-brand/admin/articles/index.html">View</a></li>
        <li><a href="/my-brand/admin/articles/new.html">New</a></li>
        </ul>
        </details>
        <details>
        <summary>Users</summary>
        <a href="/my-brand/admin/users.html">View</a>
    </details>
</nav>
`

class Nav extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open'})
        shadowRoot.appendChild(navTemplate.content)
    }
}

customElements.define('nav-component', Nav)