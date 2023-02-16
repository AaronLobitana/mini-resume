import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const user = new URL('../assets/placeholderimg.jpg', import.meta.url).href;

export class MiniResume extends LitElement {
 
  static get properties() 
  {
    return {
      name: {
        type: String,
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
      }
    }
  }


    
  static get styles(){
    return css`
    
    .overallcard{
      width: 600px;
      border: 2px solid black;
      display: inline-block;
      background-color: black;
    }

    

    .image{
      margin-left: 40px;
      width: 200px;
      float: left;
      border-radius: 50%;
      border: 4px solid white;
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
  }

  render() {
    return html`
      
      <div class="overallcard">
        <div class="box">

          <div class="pic">

            <meme-maker 
              image-url=${user}
              top-text="me: doesn't have a professional headshot" bottom-text="also me:">
            </meme-maker>

            
          </div>

          <div class="text">
            <div class="heading">
              <slot name="username"></slot>
              <slot name="college"></slot>
              <slot name="major"></slot>
            </div>

            <details class="info">
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