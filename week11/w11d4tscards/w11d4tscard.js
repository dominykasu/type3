"use strict";
const imgArr = ["https://i.pinimg.com/474x/c5/d3/9e/c5d39ed77b45f95a4cb97b3bc3186b6b.jpg", "https://avatarfiles.alphacoders.com/124/124420.jpg", "https://i.pinimg.com/474x/6e/13/17/6e13176bfe919e21518f6ab963ac3315.jpg", "https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg", "https://i.pinimg.com/474x/6e/ca/44/6eca448c078520d1a94aa943918513c7.jpg"];
const userNameArr = ["Jonas", "Petras", "Paulius", "Arturas", "Justas"];
const ageArr = [14, 25, 55, 32, 1];
const hobbiesArr = ["eating", "sleeping", "running", "jumping", "MMA"];
const phoneNumberArr = [12, 34, 56, 78, 90];
const emailArr = ["a@a.com", "b@b.nl", "c@c.co.uk", "d@d.de", "f@f.fr"];
const cardInput = document.getElementById("cardSelect");
const cardButton = document.getElementById("generateButton");
let randomNumbers = [];
cardButton.onclick = () => {
    let cardTotal = Number(cardInput.value);
    for (let i = 0; i < cardTotal; i++) {
        randomNumArr();
        appendCards();
    }
};
function appendCards() {
    let card = document.createElement("div");
    let imgElement = document.createElement("img");
    imgElement.src = `${imgArr[randomNumbers[0]]}`;
    let usernameElement = document.createElement("h3");
    usernameElement.innerText = userNameArr[randomNumbers[1]];
    let ageElement = document.createElement("h4");
    let hobbiesElement = document.createElement("h5");
    let phoneElement = document.createElement("h5");
    let emailElement = document.createElement("h4");
    hobbiesElement.innerText = hobbiesArr[randomNumbers[3]];
    emailElement.innerText = emailArr[randomNumbers[0]];
    phoneElement.innerText = phoneNumberArr[randomNumbers[4]].toString();
    ageElement.innerText = String(ageArr[randomNumbers[2]]);
    document.body.appendChild(card);
    card.classList.add("test");
    card.appendChild(imgElement);
    card.appendChild(usernameElement);
    card.appendChild(ageElement);
    card.appendChild(hobbiesElement);
    card.appendChild(phoneElement);
    card.appendChild(emailElement);
}
function randomNumArr() {
    randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        randomNumbers.push(randomNumber);
    }
    console.log(randomNumbers);
}
