import {LitElement, html} from '../node_modules/@polymer/lit-element/lit-element.js';

export class RepnetApp extends LitElement {
  static get properties() {
    return {
    };
  }

  constructor() {
    super();
  }

  _render() {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        
        .mid-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 300px;
          width: 100vw;
          margin: auto 0;
          background-color: #FCE4EC;
          box-shadow: inset 0px 5px 10px -3px rgba(0,0,0,0.5);
        }

        .fullscreen {
          display: flex;
          width: 100vw;
          height: 100vh;
          background-color: black;
        }      

        span {
          display: block;
          margin: 0 auto;          
        }
        h2 {
          margin: 0 auto;          
        }

        h1 {
          font-family: 'Changa One', cursive;
        }

        h1, h2, h3 {
          padding: 5px;
        }
      </style>
      <div class="fullscreen">
        <div class="mid-banner">
          <img width="100px" alt="Spider web" src="../images/spider-web.png" />          
          <h1>REPNET</h1>
          <h2>The network where reputation matters</h2>
          <h3>We bind trolls and promote innovation</h3>
        </div>
      </div>
    `;
  }
}

customElements.define('repnet-app', RepnetApp);
