document.addEventListener("DOMContentLoaded", () => {

const cardArray = [
    {
        name: "img1",
        img: "img/img1.jpg"
    },
    {
        name: "img1",
        img: "img/img1.jpg"
    },
    {
        name: "img2",
        img: "img/img2.jpg"
    },
    {
        name: "img2",
        img: "img/img2.jpg"
    },
    {
        name: "img3",
        img: "img/img3.jpg"
    },
    {
        name: "img3",
        img: "img/img3.jpg"
    },
    {
        name: "img4",
        img: "img/img4.jpg"
    },
    {
        name: "img4",
        img: "img/img4.jpg"
    },
    {
        name: "img5",
        img: "img/img5.jpg"
    },
    {
        name: "img5",
        img: "img/img5.jpg"
    },
    {
        name: "img6",
        img: "img/img6.jpg"
    },
    {
        name: "img6",
        img: "img/img6.jpg"
    }
]

cardArray.sort(() => 0.5 - Math.random());



const cardFront = document.querySelector(".grid-container");
const resultDisplay = document.querySelector("#result");
const timeScreen =  document.querySelector("#time");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];



function createBoard() {
    for (let i=0; i < cardArray.length; i++){
        var card = document.createElement("img");
        card.setAttribute("src","img/card-suit.jpg");
        card.setAttribute("data-id",i);
        card.addEventListener("click", flipCard);
        cardFront.appendChild(card);
    }
}

function checkForMatch() {
    var cards  = document.querySelectorAll("img");
    const opitionOneId = cardsChosenId[0];
    const opitionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("Bir eşleşme buldun.")
        cards[opitionOneId].setAttribute("src","img/glass.png");
        cards[opitionTwoId].setAttribute("src","img/glass.png");
        cardsWon.push(cardsChosen);
    }else{
        cards[opitionOneId].setAttribute("src", "img/card-suit.jpg")
        cards[opitionTwoId].setAttribute("src", "img/card-suit.jpg")
        alert("Tekrar dene.");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "";
        resultDisplay.innerHTML = "<i class='fas fa-check-circle'></i>";
        alert("Tebrikler tüm kartlar eşleşti!")
        location.reload();
    }

}

function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
    console.log(cardsChosenId)
    console.log(cardsChosen)
}



createBoard();
});
