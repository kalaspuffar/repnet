import {LitElement, html} from '@polymer/lit-element';
import './wc-input.js';
import './wc-button.js';

export class RepnetApp extends LitElement {

  _render({email}) {
    return html`
      <style>
        * {
          margin: 0;
          padding: 0;
          font-family: 'Verdana', cursive;          
        }
        
        .mid-banner {
          padding: 30px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
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
          font-family: 'Bungee', cursive;
          font-size: 60px;        
          line-height: 1;
          padding: 0;
        }

        h1, h2, h3 {
          padding: 5px 10px;
        }

        wc-input {
          width: 250px;
        }

        .flex-row {
          display:flex;
          flex-direction: row;
          margin-top: 20px;
        }

        button {
          padding: 0 20px;
          font-weight: bold;
          font-size: 12pt;
        }

      </style>
      <div class="fullscreen">
        <div class="mid-banner">
          <img width="100px" alt="Spider web" src="../images/spider-web.png" />          
          <h1>REPNET</h1>
          <h2>The network where reputation matters</h2>
          <h2>We promote innovation and demote trolls</h2>
          <h3>Want to be informed when you can create an account, sign-up with your email below.</h3>
          <div class="flex-row">
            <wc-input label="Enter email"></wc-input>
            <wc-button text="Send"></wc-button>
          </div>
        </div>
      </div>
    `;
  }

  constructor() {
    super();

    var config = {
      apiKey: "AIzaSyBAEhnGNOavOI3aronJLQD4X_pcsUJKYPs",
      authDomain: "repnet-963ae.firebaseapp.com",
      projectId: "repnet-963ae",
    };
    firebase.initializeApp(config);    
  }

  static get properties() {
    return {
      email: String
    };
  }

  ready() {
    super.ready();

    let buttonEl = this._root.querySelector('wc-button');
    buttonEl.addEventListener('button-clicked', e => { 
      this.signup();
    });

    let inputEl = this._root.querySelector('wc-input');
    inputEl.addEventListener('enter-pressed', e => { 
      this.signup();
    });  
    
    inputEl.addEventListener('text-entered', e => { 
      this.email = e.detail.text;
    });        
  }

  signup() {
    let inputEl = this._root.querySelector('wc-input');

    var db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);    
  
    db.collection("newsletter").add({
      email: this.email
    })
    .then(function(docRef) {
      inputEl.label = 'Thank you.'
    })
    .catch(function(error) {
      inputEl.label = 'Error: ' + error;
    });
  }
}

customElements.define('repnet-app', RepnetApp);