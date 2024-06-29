'use client';

import "./resistorWebComponent.css"

class Resistor extends HTMLElement {

    static get observedAttributes() {
      return ["color"];
    }

    attributeChangeCallback(name) {
      if (name === "color") {
        this.update();
      }
    }

    constructor() {
      super();

      const container = document.createElement("div");
      this.valSpan = document.createElement("span");

      container.appendChild(this.valSpan);
    }

    connectedCallback() {
      this.appendChild(this.container);
      this.update();
    }

    update() {
      this.valSpan.style.backgroundColor = this.getAttribute("color") || "black";
    }
}

if (!customElements.get('resistor-component')) {
    customElements.define('resistor-component', Resistor)
}
