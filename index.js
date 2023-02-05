// let age = 99;
// if (age < 100){
//     console.log("you are not eligible to get birthday card from the king")
// }
// else if (age === 100) {
//     console.log("King wish you happy birthday");
// }
// else{
//     console.log("you have gotten one")
// }


let cards = []//array -ordered list of item
let sumOfCard = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
     name : "Gab",
     chips: 145
}


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips;


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sumOfCard = firstCard + secondCard;
    renderGame();
}

function getRandomCard(){
    randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1){
        return 11;
    } else if (randomCard > 10){
        return 10;
    } else{
    return randomCard;  
    }
}

function renderGame(){
     cardsEl.textContent = "Cards: "
    //create a for loop that rnders all the card
    for(let i = 0; i< cards.length; i += 1){
        cardsEl.textContent +=  cards[i] + " "  ;
    }

    //render out all cards we have
    sumEl.textContent = "Sum: " + sumOfCard;
    if(sumOfCard <= 20){
        message = "Do you wan to draw a new card ?";
    }
    else if(sumOfCard === 21){
        message = "Wohoo! you've got blackjack"
        hasBlackJack = true;
    } else {
        message = "You are out of the game"
        isAlive = false;
    }
    
    messageEl.textContent = message;
   
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sumOfCard += card;
    cards.push(card);
    renderGame();
    }
}