import {
    html,
    LitElement
} from 'lit-element'

class NiceGreeting extends LitElement {
    static get properties() {
        label: {
            type: String
        },
        message: {
            type: String
        },
    }

    render() {
        return html `
            <div class="container">
                <h2>Hello, World!</h2>
            </div>
        `
    }
}

customElements.define('nice-greeting', NiceGreeting)