'use client';

import "./resistorWebComponent.css"

class Resistor extends HTMLElement {

    static get observedAttributes() {
      return ["color1", "color2"];
    }

    attributeChangedCallback(name) {
      console.log(`attribute changed: ${name}`)
      switch(name) {
        case "color1":
          this.update(1);
          break;
        case "color2":
          this.update(2);
          break;
      }
    }

    constructor() {
      super();

      console.log("constructor called")

      const container = document.createElement("div");
      container.id = "resistor-color-container";

      this.valSpan1 = document.createElement("span");
      this.valSpan1.id = "resistor-color-value1";
      this.valSpan2 = document.createElement("span");
      this.valSpan2.id = "resistor-color-value2";

      container.appendChild(this.valSpan1);
      container.appendChild(this.valSpan2);

      this.container = container;
    }

    connectedCallback() {
      this.appendChild(this.container);
      this.update();
    }

    update(bandnum?: number) {
      switch(bandnum) {
        case 1:
          this.valSpan1.style.backgroundColor = this.getAttribute("color1") || "black";
          break;
        case 2:
          this.valSpan2.style.backgroundColor = this.getAttribute("color2") || "black";
          break;
        default:
          this.valSpan1.style.backgroundColor = this.getAttribute("color1") || "black";
          this.valSpan2.style.backgroundColor = this.getAttribute("color2") || "black";
          break;
      }
    }
}

if (!customElements.get('resistor-component')) {
    customElements.define('resistor-component', Resistor)
}
