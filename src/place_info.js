import place_file from "../place.json" assert {type: "json"};

const create_card_details = (place) => {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    const info = document.createElement('p');
    const img = document.createElement("img");
    // const div = document.createElement("div");

    title.textContent = place.title;
    info.innerHTML = place.info;
    img.src = place.cover;

    // div.appendChild(title);
    // div.appendChild(info);
    // article.appendChild(div);
    article.appendChild(title);
    article.appendChild(img);
    article.appendChild(info);
    return (article);
}

const card_details = document.getElementById("cards-details");
let params = new URLSearchParams(window.location.search);
const page_info = create_card_details(place_file.card[params.get("place")]);
const btn_back = document.getElementById("btn-back");

card_details.appendChild(page_info);

btn_back.addEventListener("click", e => {
        window.location = "./index.html";
        page_info.remove();
    })






    