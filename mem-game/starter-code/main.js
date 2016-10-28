console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//*if (cardTwo === cardFour) {
//	alert("you got it!");
//}	else{
//		alert("try again")	}

var boardDiv = document.getElementById("game-board"); // Stores the div element with 
												  // the id game-board into the var board



//for (var i = 0; i < 4; i++) { // loops 4 times
//	createCard(); // calls the createCard function
//}

//function createCard() {
//	var boardDiv = document.getElementById("game-board"); // 
//												  	  // the id game-board into the var board
//	cardElement = document.createElement('div'); // creates an element of type div and stores it into var cardElement
//	cardElement.className = 'card'; // sets the class name of the cardElement (aka a div) to card
//	boardDiv.appendChild(cardElement);
//}

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardElement;
var queenImg ='<img src="Queen.png" alt="Queen of Spades" />';
var kingImg ='<img src="King.png" alt="King of Spades" />';


for (var i = 0; i < cards.length; i++) {
	cardElement = document.createElement('div'); // creates an element of type div and stores it into var cardElement
	cardElement.className = 'card'; // sets the class name of the cardElement (aka a div) to card
	boardDiv.appendChild(cardElement); 
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
}	
function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}	
	
}

function isMatch (cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("you win!");
	}
}