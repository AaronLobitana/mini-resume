import { LitElement, html, css } from 'lit';
import "./mini-resume.js";


export class MyCardList extends LitElement{

    static get tag() {
        return 'mycard-list';
    }

    static get properties() {
        return {
            cards: { type: Array },
            name: { type: String },
        }

    }

    constructor() {
        super();
        this.cards = [
            [
                {
                    "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
                    "name": "Aaron Lobitana",
                    "extrainfolabel": "Extra Information",
                    "shadow-enable": false,
                    "new-color": null,
                    "memeTop": "me: doesn't have a professional headshot",
                    "memeBottom": "also me:",
                    "opened": false
            
                },
                {
                    "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
                    "name": "Aaron Lobitana",
                    "extrainfolabel": "Extra Information",
                    "shadow-enable": false,
                    "new-color": null,
                    "memeTop": "me: doesn't have a professional headshot",
                    "memeBottom": "also me:",
                    "opened": false
            
                },
                {
                    "imageURL": "https://i.imgur.com/g4oneXM.jpeg",
                    "name": "Aaron Lobitana",
                    "extrainfolabel": "Extra Information",
                    "shadow-enable": false,
                    "new-color": null,
                    "memeTop": "me: doesn't have a professional headshot",
                    "memeBottom": "also me:",
                    "opened": false
            
                }
            ]
            
            
            
            
        ];
        this.name = 'Aaron Lobitana';
    }


    static get styles(){
        return css`
        
        :host{
            display: block;
        }
        .box{
            border: 2px solid black;
            display: flex;
        }
        .item{
            display: inline-flex;
        }


    `;
    }

    render() {
        return html`
        <h2>${this.name}</h2>
        <div class="box">

            ${this.cards.map(card => html`
            <div class="item">
                <mini-resume imageURL="${card.imageURL}" name="${card.name}" extrainfolabel="${card.extrainfolabel}" ?shadow-enable="${card.shadowEnable}" new-color="${card.newColor}" memeTop="${card.memeTop}" memeBottom="${card.memeBottom}" ?opened="${card.opened}"></mini-resume>
            </div>
            `)}

        </div>



        `;
    }
    
}

customElements.define(MyCardList.tag, MyCardList);