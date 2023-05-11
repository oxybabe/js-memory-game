(function () {
  "use strict";

  let flippedCards = []; //the 2 cards that are flipped
  let matchedCards = []; //array to keep track of number of matched cards
  const htmlContainer = document.querySelector(".container");

  const cards = [
    {
      text: "Terracottocat",
      url: "https://octodex.github.com/images/Terracottocat_Single.png",
    },
    {
      text: "Fintechtocat",
      url: "https://octodex.github.com/images/Fintechtocat.png",
    },
    {
      text: "Sentrytocat",
      url: "https://octodex.github.com/images/Sentrytocat_octodex.jpg",
    },
    {
      text: "Umbrellatocat",
      url: "https://octodex.github.com/images/puddle_jumper_octodex.jpg",
    },
    {
      text: "Surftoocat",
      url: "https://octodex.github.com/images/surftocat.png",
    },

    {
      text: "Boxertocat",
      url: "https://octodex.github.com/images/boxertocat_octodex.jpg",
    },
  ];
  const deck = [...cards, ...cards]; //putting the cards into the deck
  const numOfTotalCardsInGame = deck.length; //total cards in the game
  const cardsContainer = document.querySelector(".container");

  const playButton = document.querySelector("#play-button"); //button to start the game not being used at the moment

  shuffleCards(deck); //all the cards get shuffled
  function shuffleCards(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  };

  function generateCardsHTML(deck, container) {
    let html = "";
    for (let i = 0; i < deck.length; i++) {
      const card = deck[i];

      html += `
                <div class="card" data-name="${card.text}"> 
                    <div class="card__face card__face--front">
                        <img class="card_image" src="${card.url}" alt="${card.text}" />
                    </div>
                    <div class="card__face card__face--back">
                        <img class="card_image" src="https://octodex.github.com/images/yogitocat.png" alt="Yogitocat" />
                    </div>
                </div>
        `;
    }
    container.innerHTML = "";
    container.insertAdjacentHTML("afterbegin", html);
  };

  
  
  play();// the game is started

  function checkForMatch() {
    let matched = flippedCards[0].dataset.name === flippedCards[1].dataset.name;
    
    if (matched) {
      console.log("Cards Match!")
      matchedCards.push(flippedCards[0]);
      matchedCards.push(flippedCards[1]);
      disableCards(flippedCards[0],flippedCards[1]);
      checkForMatch(".open").removeClass("myCardsArray").addClass("matchedCards");
    } else {
      console.log("No Match :( ");
      unFlipCards();
      checkForMatch(".open").removeClass("matchedCards").addClass("myCardsArray");
    }
  };
  
  function unFlipCards(){
    flippedCards.forEach(function (card) {
      setTimeout(function () {
        card.classList.remove("flip");
      }, 1000);
    });
    flippedCards = [];
  };

  function disableCards(card1, card2){
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard); 

    flippedCards.forEach(function (card) {
      setTimeout(function () {
        card.classList.remove("unFlipCards");
      }, 1000);
    });
    flippedCards = []; 
    if(matchedCards.length === numOfTotalCardsInGame){
      alert("You won!");
    }

  };

  function removeCards(card1, card2, cards) {
    // flippedCards.forEach(function ())
    var resizedArray = [];
    var originalArraySize = cards.size; // got the size of the array so we can loop through it
    for (var i = 0; i < originalArraySize; i++) {
      //looping through the array
      if (card1 !== cards[i] || card2 !== cards[i]) {
        // comparing card1 and 2 to the element in the array which is technically a card
        // resizedArray.push(originalArray[i]);
        card1.removeEventListener("click", flipCard);
        card2.removeEventListener("click", flipCard);

        // only keeping the cards that are not a match
      }
    }
    return resizedArray;
  };

  function flipCard() { //flipCard is the event inside play function
    // alert('firing')
    this.classList.add("flip");
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      checkForMatch();
    }
  };

  function play() {
    const deck = [...cards, ...cards];
    shuffleCards(deck);
    generateCardsHTML(deck, cardsContainer);
    const cardNodes = document.querySelectorAll(".card");
    console.log({ cardNodes });
    for (let i = 0; i < cardNodes.length; i++) {
      cardNodes[i].addEventListener("click", flipCard);
    }
  };
})();
