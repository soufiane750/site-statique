import place_file from "../place.json" assert {type: "json"};

class Card extends HTMLElement {
    _title = document.createElement("h4");
    _cover = document.createElement("img");
    _btn = document.createElement("button");
    _id = "0"

    constructor(title, cover, id) {
        super();
        this.classList.add("cards");
        this._btn.classList.add("btn-card");
    

        this._cover.src = cover;
        this._title.textContent = title;
        this._btn.textContent = "Découvrir";
        this._btn.id = id;

        this.appendChild(this._cover);
        this.appendChild(this._title);
        this.appendChild(this._btn);
    }
}
customElements.define("card-a", Card);

// Setting up the cards
const gallery = document.getElementById("cards-container");

// parsing JSON file
place_file.card.forEach(item => {
    gallery.appendChild(new Card(item.title, item.cover, item.id));
});

// Track btn
const btn_card = document.getElementsByClassName("btn-card");
const btn_back = document.getElementById("btn-details");

for (let i = 0; btn_card[i]; i++) {
        btn_card[i].addEventListener("click", e => {
            const id = i;
            // window.location = `place_info.html?place=${btn_card[i].parentElement._btn.id}`;
            window.location = `place_info.html?place=${id}`;
    })
}
