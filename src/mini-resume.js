import { LitElement, html, css } from 'lit';

const user = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

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
      }
    }
  }


    
  static get styles(){
    return css`
    
    .overallcard{
      width: 600px;
      border: 2px solid black;
      display: inline-flex;
      background-color: #b7e9e7;
    }

    .image{
      width: 600px;
    }
    
    .heading{
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
    }

    .info{
      margin: 24px;
      padding: 12px;
      font-weight: bold;
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
      }
    
    }
    @media only screen and (max-width: 425px){
      .overallcard{
        font-weight: normal;
        font-size: 12px;
      }
      
    
    }
    
    
    `;
  }

  constructor() {
    super();
    this.name = "Aaron Lobitana";
    this.major = "B.S. Cybersecurity";
    this.education = "Pennsylvania State University";
    this.skills = "Placeholder skills";
    this.workexp = "Placeholder work experience";
    this.rlvntcourses = "Placeholder relevant courses"; 
  }

  render() {
    return html`
      
      <div class="overallcard">
        <div class="box">
          <img class="image" src="${user}" alt="User image"/>
            
          <div class="heading">
            <h3>${this.name}</h3>
            <h4>${this.education}</h4>
            <h4>${this.major}</h4>
          </div>

          <details class="info">
            <summary>Extra Information</summary>

            <div>
              <ul>
                <li>${this.skills}</li>
                <li>${this.workexp}</li>
                <li>${this.rlvntcourses}</li>
              </ul>
            </div>

          </details>
                

            
          

        </div>

      </div>
      

      
    `;
  }
}

customElements.define('mini-resume', MiniResume);