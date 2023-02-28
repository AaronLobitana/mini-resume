import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

export class MiniResume extends LitElement {
 
  static get properties() 
  {
    return {
      name: {
        type: String,
        reflect: true,
      },
      extrainfolabel: {
        type: String,
      },
      shadowEnable: {
        type: Boolean,
        reflect: true,
        attribute: "shadow-enable",
      },
      newColor: {
        type: String,
        reflect: true,
        attribute: 'new-color'
      },
      memeTop: {
        type: String,
      },
      memeBottom: {
        type: String,
      },
      opened: {
        type: Boolean,
        reflect: true,
      },
      imageURL: {
        type: String,
      }
    }
  }


    
  static get styles(){
    return css`

    
    :host([shadow-enable]) .overallcard{
      box-shadow: 2px 2px 15px blue;
      margin: 12px;
    }


    :host([new-color="green"]) .overallcard{
      background-color: var(--mini-resume-new-color, lightseagreen);
    }

    :host([new-color="blue"]) .overallcard{
      background-color: var(--mini-resume-new-color, lightskyblue);
    }
    
    :host([new-color="pink"]) .overallcard{
      background-color: var(--mini-resume-new-color, lightpink);
    }
    :host([new-color="black"]) .overallcard{
      background-color: var(--mini-resume-new-color, black);
    }
    
    
    .overallcard{
      width: 600px;
      border: 2px solid black;
      display: inline-block;
      background-color: black;
      margin: 12px;
    }

    
    .heading{
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      color: white;
      margin-bottom: 80px;
      font-family: 'Lucida Console', 'Courier New', Courier, monospace;
    }

    .heading h3:hover{
      color: #ffb7c5;
      font-style: italic;
      
    }

    .heading h4:hover{
      color: #ffb7c5;
      font-style: italic;
    }

    .info{
      margin: 24px;
      padding: 12px;
      font-weight: bold;
      color: white;
      border: 2px solid white;
      border-radius: 12px;
      font-family: 'Lucida Console', 'Courier New', Courier, monospace;
    }

    .info summary{
      font-size: 20px;
      
    }

    @media only screen and (max-width: 1200px){
      .overallcard{
        background-color: lightblue;
      }
    
    }
    @media only screen and (max-width: 600px){
      .overallcard{
        background-color: lightcoral;
        width: 500px;
        
      }
      .heading h4{
        font-weight: normal;
        font-size: 24px;
      }
      .info{
        display: none;
      }
    
    }
    @media only screen and (max-width: 425px){
      .overallcard{
        font-weight: normal;
        font-size: 12px;
        background-color: powderblue;
      }
      
    
    }


    `;
  }

  constructor() {
    super();
    this.name = "Aaron Lobitana";
    this.extrainfolabel = "Extra Information";
    this.shadowEnable = false;
    this.newColor = null;
    this.memeTop = "me: doesn't have a professional headshot";
    this.memeBottom = "also me:"
    this.opened = false;
    this.imageURL = 'https://i.imgur.com/g4oneXM.jpeg';
    
  }

  toggleEvent(){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === '' ? true : false;
    this.opened = state;
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'opened'){
        this.dispatchEvent(new CustomEvent('opened-changed', 
          { 
            composed: true,
            bubbles: true,
            cancelable: false,
            detail: { value: this[propName] } 
          }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      };
    });
  }

  render() {
    return html`
      
      <div class="overallcard">
        <div class="box">

          <div class="pic">

          
            <meme-maker 
              image-url="${this.imageURL}" 
              top-text="${this.memeTop}" 
              bottom-text="${this.memeBottom}">
            </meme-maker>

            
          </div>

          <div class="text">
            <div class="heading">
              <h3>${this.name}</h3>
              <h3><slot name="college"></slot></h3>
              <h3><slot name="major"></slot></h3>
            </div>

            <details class="info" .open="${this.opened}" @toggle="${this.toggleEvent}">
              <summary>${this.extrainfolabel}</summary>


              <slot name="infoslot"></slot>

            </details>

          </div>
          
            
        
        </div>

      </div>
      

      
    `;
  }
}

customElements.define('mini-resume', MiniResume);