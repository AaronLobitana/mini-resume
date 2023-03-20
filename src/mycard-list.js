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
        this.cards = [];
        this.name = 'Aaron Lobitana';
        this.updateRoster();
    }

    updateRoster() {
        const address = new URL('../api/cardarray', import.meta.url).href;
        const data = fetch(address).then((response) => {
            if (response.ok){
                return response.json();
            }
            return [];
        })
        .then((data) => {
            this.cards = data;
        })

    
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