import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const user = new URL('../assets/placeholderimg.jpg', import.meta.url).href;

export class MiniResume extends LitElement {
 
  static get properties() 
  {
    return {
      name: {
        type: String,
        reflect: true,
      },
      major: {
        type: String,
      },
      education: {
        type: String,
      },
      skills: {
        type: String,
      },
      workexp: {
        type: String,
      },
      rlvntcourses: {
        type: String,
      },
      extrainfolabel: {
        type: String,
      },
      shadowEnable: {
        Boolean: true,
        reflect: true,
        attribute: "shadow-enable",
      },
      newColor: {
        type: String,
        reflect: true,
        attribute: 'new-color'
      },
      meme: {
        type: String,
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
      }
    }
  }


    
  static get styles(){
    return css`

    
    :host([shadow-enable=true]) .overallcard{
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
    this.major = "B.S. Cybersecurity";
    this.education = "Pennsylvania State University";
    this.skillslabel = "Skills";
    this.workexplabel = "Work Experience";
    this.rlvntcourseslabel = "Relevant Coursework"; 
    this.extrainfolabel = "Extra Information";
    this.shadowEnable = false;
    this.newColor = null;
    this.meme = null; // how do make this a property if my img is downloaded?
    this.memeTop = "me: doesn't have a professional headshot";
    this.memeBottom = "also me:"
    this.opened = false;
    
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
              image-url=${user} 
              top-text="${this.memeTop}" 
              bottom-text="${this.memeBottom}">
            </meme-maker>

            
          </div>

          <div class="text">
            <div class="heading">
              <h3>${this.name}</h3>
              <slot name="college"></slot>
              <slot name="major"></slot>
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