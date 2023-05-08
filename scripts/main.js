(function () {
  "use strict";

  const flippedCards = [];
  const matchedCards = [];
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
  const deck = [...cards, ...cards];
  const cardsContainer = document.querySelector(".container");
  let flipCards = [],
    matchCards = [];

  const playButton = document.querySelector("#play-button");

  shuffleCards(deck);
  function shuffleCards(arr) {
    return arr.sort(function () {
      return Math.random() - 0.5;
    });
  }

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
  }

  function unflippedCards() {
    flippedCards.forEach(function (card) {
      setTimeout(function () {
        card.classList.remove("flip");
      }, 1000);
    });
    flippedCards = [];
  }
  //compare flipped cards to see if they match
  //[node1, node2]
  function checkForMatch(flippedCards) {
    let match = flippedCards[0].dataset.deck === flippedCards[1].dataset.deck;
    let matchCard = matchedCards[0];
    if (match) {
      checkForMatch(".open").removeClass("myCardsArray").addClass("matchedCards");
    } else {
      checkForMatch(".open").removeClass("matchedCards").addClass("myCardsArray");

      //TODO do this first if the cards do not match we need to flip the cards back over

      // setTimeout(function () {
      //     deck('.open').addClass('matchedCards').removeClass('myCardsArray');
      // }, 500);
      //unflipCards();
    }
  }

  function removeCards(card1, card2, cards) {
    // flippedCards.forEach(function ())
    var resizedArray = [];
    var originalArraySize = cards.size; // got the size of the array so we can loop through it
    for (var i = 0; i < originalArraySize; i++) {
      //looping through the array
      if (card1 !== cards[i] || card2 !== cards[i]) {
        // comparing card1 and 2 to the element in the array which is technically a card
        // resizedArray.push(originalArray[i]);
        card1.removeEvenListener("click", flipCard);
        card2.removeEvenListener("click", flipCard);

        // only keeping the cards that are not a match
      }
    }
    return resizedArray;
  }
  /* TODO: if not needed delete all this 
//check to see if two cards match
  function checkForMatch(card1, card2, myCardsArray, matchedCards) {
//     // you need to compare the two value inside the flipped cards array to see if they match
//     let resizedArray = [];
    if (card1 === card2) {
        myCardsArray('.open').removeClass('myCardsArray').addClass('matchedCards');
    //   resizedArray = removeCards(card1, card2, myCardsArray);
    //   matchedCards.push(card1);
    //   matchedCards.push(card2);
    //   return resizedArray;
    } else {
    //   return myCardsArray;
    setTimeout(function () {
        myCardsArray('.open').addClass('matchedCards').removeClass('myCardsArray');
    }, 500);
    };
    // if ($('.match').length === 12) {
//        winGame();
//        alert("You won!");
//     };
  }
*/
  function flipCard() {
    // alert('firing')
    this.classList.add("flip");
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      checkForMatch(flippedCards);
    }
  }

  function play() {
    const deck = [...cards, ...cards];
    shuffleCards(deck);
    generateCardsHTML(deck, cardsContainer);
    const cardNodes = document.querySelectorAll(".card");
    console.log({ cardNodes });
    for (let i = 0; i < cardNodes.length; i++) {
      cardNodes[i].addEventListener("click", flipCard);
    }
  }

  play();
})();
