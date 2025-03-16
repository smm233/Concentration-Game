var errors = 0;
var rows = 3;
var columns = 6;
var cards = [
    "Beidou",
    "Clorinde",
    "Dehya",
    // "Furina",
    "KujouSara",
    "Navia",
    "Ningguang",
    "Xianyun",
    "Xinyan",
    "YaeMiko"
];

var cardSet;
var cardSelected;
var frontSelected;
var board = [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cards.concat(cards);
    console.log(cardSet);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);

        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < columns; j++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = i.toString() + "-" + j.toString();
            card.src = "images/" + cardImg + ".png";
            card.classList.add("card");
            card.addEventListener("click", selectCard());
            console.log(card.src);
            document.getElementById("board").append(card);
            
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1500);
}

function hideCards() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let card = document.getElementById(i.toString() + "-" + j.toString());
            card.src = "images/back.png";
        }
    }
}