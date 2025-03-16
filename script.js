var errors = 0;
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
var board = [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cards.concat(cards);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);

        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

function startGame() {
    
}