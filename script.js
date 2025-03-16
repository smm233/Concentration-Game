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
    "YaeMiko",
    "Ayato",
    "Baizhu",
    "Bennett",
    "Charlotte",
    "Chevreuse",
    "Chiori",
    "Chongyun",
    "Collei",
    "Cyno",
    "Diluc",
    "Dori",
    "Faruzan",
    "Freminet",
    "Ganyu",
    "Itto",
    "Kaeya",
    "Kaveh",
    "Kazuha",
    "Kirara",
    "Lynette",
    "Mona",
    "Mualani",
    "Nahida",
    "Neuvillette",
    "Qiqi",
    "Rosaria",
    "Sayu",
    "Shinobu",
    "Sigewinne",
    "Tighnari",
    "Venti",
    "Wanderer",
    "Wriothesley",
    "Xiangling",
    "Yanfei",
    "Yoimiya",
    "Yunjin",
    "Zhongli"
];

var cardSet;
var firstCards = [];
var card1Selected;
var card2Selected;
var board = [];

window.onload = function() {
    chooseCards();
    shuffleCards();
    startGame();
}

function chooseCards() {
    //randomly choose first 9 cards from cards array
    for (let i = 0; i < 10; i++) {
        let j = Math.floor(Math.random() * cards.length);
        let card = cards[j];
        firstCards.push(card);
    }
    console.log(firstCards);
}

function shuffleCards() {
    cardSet = firstCards.concat(firstCards);
    console.log(cardSet);

    //shuffle those 10 cards
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