(function () {
    "use strict";

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
            url: "https://octodex.github.com/images/Sentrytocat_octodex.jpg"
        },
        {
            text: "Umbrellatocat",
            url: "https://octodex.github.com/images/puddle_jumper_octodex.jpg"
        },
        {
        text: "Surfotocat",
        url: "https://octodex.github.com/images/surftocat.png"
        },

        {   text: "Boxercat",
        url: "https://octodex.github.com/images/boxertocat_octodex.jpg"
        }
    ];
    const deck = [...cards, ...cards];

    function shuffleCards(arr) {
        return arr.sort(function () {
            return Math.random() - 0.5;
        });

        }
        shuffleCards(deck);

        function generateCardsHTML() {
            let html = "";
            for(let i = 0; i < deck.length; i++) {
                const card = deck[i];
                html += `

                <div class="card" data-name=${cards.text}>
            <div class="card-back">
            <img src="https://octodex.github.com/images/yogitocat.png" alt=${cards.text} />
            </div>
            <div class="card-front">
            <img src=${card.url} alt=${cards.text} />
        </div>
        </div>
        `;
            }
            return html;

        }
        const htmlContainer = document.querySelector(".container");
        const cardsHTML = generateCardsHTML();
        htmlContainer.insertAdjacentHTML("afterbegin", cardsHTML);
        
    }
)();

