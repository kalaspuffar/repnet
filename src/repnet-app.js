import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

export class RepnetApp extends LitElement {
  static get properties() {
    return {
      name: {
        Type: String
      }  
    }
  }

  constructor() {
    super();
    this.name = 'Explorers';
  }

  _render({name}) {
    return html`<h2>Welcome!</h2>`;
  }  
}

customElements.define('repnet-app', RepnetApp);
