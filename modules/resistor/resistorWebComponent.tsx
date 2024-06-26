
class Resistor extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div>
            <h1>Resistor</h1>
            <p>Resistor component</p>
        </div>        `
    }
}

if (!customElements.get('resistor-component')) {
    customElements.define('resistor-component', Resistor)
}