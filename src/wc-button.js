import {LitElement, html} from '@polymer/lit-element';

export class WcButton extends LitElement {
  _render({text}) {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
          font-family: 'Verdana', cursive;
        }
        
        button {
          padding: 0 20px;
          font-weight: bold;
          font-size: 12pt;
          height: 100%;          
          background-color: #ECEFF1;
          border: 1px solid #78909C;
        }
        button:focus {
          background-color: #ECEFF1;
          border: 1px solid #9C27B0;
        }

        button:active {
          background-color: #9C27B0;
          border: 1px solid #ECEFF1;
        }
      </style>
      <button>${text}</button>
    `;
  }

  static get properties() {
    return {
      text: String
    };
  }

  ready() {
    super.ready();
    let buttonEl = this._root.querySelector('button');

    buttonEl.addEventListener('click', e => {        
        this.dispatchEvent(new CustomEvent('button-clicked'));
    });      
  }

}

customElements.define('wc-button', WcButton);
