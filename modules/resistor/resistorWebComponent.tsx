'use client';

import "./resistorWebComponent.css"

class Resistor extends HTMLElement {

    static get observedAttributes() {
      return ["color"];
    }

    attributeChangedCallback(name) {
      console.log(`attribute changed: ${name}`)
      if (name === "color") {
        this.update();
      }
    }

    constructor() {
      super();

      console.log("constructor called")

      const container = document.createElement("div");
      container.id = "resistor-color-container";
      this.valSpan = document.createElement("span");
      this.valSpan.id = "resistor-color-value";

      container.appendChild(this.valSpan);
      this.container = container;
    }

    connectedCallback() {
      this.appendChild(this.container);
      this.update();
    }

    update() {
      console.log(`update method triggered with color: ${this.getAttribute("color")}`)
      this.valSpan.style.backgroundColor = this.getAttribute("color") || "black";
    }
}

if (!customElements.get('resistor-component')) {
    customElements.define('resistor-component', Resistor)
}
