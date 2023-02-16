import { LitElement, html, css } from 'lit';

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
    }

    .heading h3:hover{
      font-stretch: condensed;
      color: #ffb7c5;
      
    }

    .heading h4:hover{
      color: #ffb7c5;
      font-stretch: semi-condensed;
    }

    .info{
      margin: 24px;
      padding: 12px;
      font-weight: bold;
      color: white;
      border: 2px solid white;
      border-radius: 12px;
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

    .skills{
      margin-bottom: 20px;
    }
    
    .exp{
      margin-bottom: 20px;
    }

    .course{
      margin-bottom: 20px;
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

          <div class="pic">
            <img class="image" src="${user}" alt="User image"/>
          </div>

          <div class="text">
            <div class="heading">
              <h3>${this.name}</h3>
              <h4>${this.education}</h4>
              <h4>${this.major}</h4>
            </div>

            <details class="info">
              <summary>Extra Information</summary>

              <div>
                <ul>
                  <details class="skills">
                    <summary>Skills</summary>
                    <li>${this.skills}</li>
                  </details>

                  <details class="exp">
                    <summary>Work Experience</summary>
                    <li>${this.workexp}</li>
                  </details>

                  <details class="course">
                    <summary>Relevant Course Work</summary>
                    <li>${this.rlvntcourses}</li>
                  </details>

                </ul>
              </div>

            </details>

          </div>
          
            
        
        </div>

      </div>
      

      
    `;
  }
}

customElements.define('mini-resume', MiniResume);