var errors = 0;
var rows = 3;
var columns = 6;
var cards = [
    "Beidou",
    "Clorinde",
    "Dehya",
    "Furina",
    "KujouSara",
    "Navia",
    "Ningguang",
    "Xianyun",
    "Xinyan",
    "YaeMiko"
];

var cardSet;
var card1Selected;
var card2Selected;
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
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
            
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1000);
}

function hideCards() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let card = document.getElementById(i.toString() + "-" + j.toString());
            card.src = "images/back.png";
        }
    }
}

function selectCard() {
    if(this.src.includes("images/back")) {
        if(!card1Selected) {
            card1Selected = this;
            let coords = card1Selected.id.split("-");
            let i = parseInt(coords[0]);
            let j = parseInt(coords[1]);

            card1Selected.src = "images/" + board[i][j] + ".png";
        } else if(!card2Selected && this !=  card1Selected) {
            card2Selected = this;
            let coords = card2Selected.id.split("-");
            let i = parseInt(coords[0]);
            let j = parseInt(coords[1]);

            card2Selected.src = "images/" + board[i][j] + ".png";
            setTimeout(checkCards, 1000);
        }
    }
}

function checkCards() {
    if(card1Selected.src != card2Selected.src) {
        card1Selected.src = "images/back.png"; 
        card2Selected.src = "images/back.png";
        errors++;
        document.getElementById("errors").innerText = errors;
    }
    card1Selected = null;
    card2Selected = null;
}