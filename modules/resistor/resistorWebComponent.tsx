'use client';

import "./resistorWebComponent.css"
import { calculateResistance } from "./helpers/calculateResistance";

class Resistor extends HTMLElement {

    static get observedAttributes() {
      return ["color1", "color2", "color3", "color4", "color5", "bandCount"];
    }

    attributeChangedCallback(name: string) {
      console.log(`attribute changed: ${name}`)
      switch(name) {
        case "color1":
          this.update(1);
          break;
        case "color2":
          this.update(2);
          break;
        case "color3":
          this.update(3);
          break;
        case "color4":
          this.update(4);
          break;
        case "color5":
          this.update(5);
          break;
        case "bandCount":
          this.updateBandCount();
          break;
      }
    }

    constructor() {
      super();
      console.log("constructor called")

      const container = document.createElement("div");
      container.id = "resistor-color-container";

      for(let i = 1; i <= 4; i++) {
        const span = document.createElement("span");
        span.id = `resistor-color-value${i}`;
        container.appendChild(span);
        this[`valSpan${i}`] = span;
      }
      
      const ohmvalue = document.createElement("div");
      ohmvalue.id = "ohmvalue";
      ohmvalue.textContent = "Initial Ohm Value";
      container.appendChild(ohmvalue);

      if (this.getAttribute("bandCount") === "true") {
        const span = document.createElement("span");
        span.id = "resistor-color-value5";
        container.appendChild(span);
        this.valSpan5 = span;
      }

      this.container = container;
    }

    connectedCallback() {
      this.appendChild(this.container);
      this.update();
      this.updateBandCount();
    }

    update(bandnum) {
      switch(bandnum) {
        case 1:
          this.valSpan1.style.backgroundColor = this.getAttribute("color1") || "black";
          break;
        case 2:
          this.valSpan2.style.backgroundColor = this.getAttribute("color2") || "black";
          break;
        case 3:
          this.valSpan3.style.backgroundColor = this.getAttribute("color3") || "black";
          break;
        case 4:
          this.valSpan4.style.backgroundColor = this.getAttribute("color4") || "black";
          break;
        case 5:
          if (this.getAttribute("bandCount") === "true") {
            this.valSpan5.style.backgroundColor = this.getAttribute("color5") || "black";
            break;
          }
        default:
          this.valSpan1.style.backgroundColor = this.getAttribute("color1") || "black";
          this.valSpan2.style.backgroundColor = this.getAttribute("color2") || "black";
          this.valSpan3.style.backgroundColor = this.getAttribute("color3") || "black";
          this.valSpan4.style.backgroundColor = this.getAttribute("color4") || "black";
          if (this.getAttribute("bandCount") === "true") {
            this.valSpan5.style.backgroundColor = this.getAttribute("color5") || "black";
          }
          break;
      }
      const color1 = this.getAttribute("color1") || "black";
      const color2 = this.getAttribute("color2") || "black";
      const color3 = this.getAttribute("color3") || "black";
      const color4 = this.getAttribute("color4") || "black";

      const { resistanceValue, tolerance } = calculateResistance(color1, color2, color3, color4);
      this.container.querySelector("#ohmvalue").textContent = `${resistanceValue}Ω ±${tolerance}%`;
    }

    updateBandCount() {
      const isFiveBand = this.getAttribute("bandCount") === "true";
      if (isFiveBand && !this.valSpan5) {
        const span = document.createElement("span");
        span.id = `resistor-color-value5`;
        this.container.appendChild(span);
        this.valSpan5 = span;
        this.update(5);
      } else if (!isFiveBand && this.valspan5) {
        this.container.removeChild(this.valSpan5);
        delete this.valSpan5;
      }
    }
}

if (!customElements.get('resistor-component')) {
    customElements.define('resistor-component', Resistor)
}
