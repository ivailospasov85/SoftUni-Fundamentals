// You are given a sequence of people and for every person what cards he draws from the deck. The input will be an
// array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain
// any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards
// it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the
// type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way
// (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

function cardGames(input) {

    let cardPlayers = {};
    let values = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for (let player of input) {
        let [playerName, cards] = player.split(`: `);
        let currentCards = cards.split(`, `);

        // Here we check if current player exists, if it doesn't, we create new player with empty array[],
        // then we check each card before pushing it into the array, to remove duplicates
        // And if the player already exists, we just check the cards, and push them into the array
        if (!cardPlayers.hasOwnProperty(playerName)) {
            cardPlayers[playerName] = [];
            currentCards.forEach(card => {
                if (!cardPlayers[playerName].includes(card)) {
                    cardPlayers[playerName].push(card);
                }
            });
        } else {
            for (let currentCard of currentCards) {
                if (!cardPlayers[playerName].includes(currentCard)) {
                    cardPlayers[playerName].push(currentCard);
                }
            }
        }
    }
    // We get all entries, which returns [[name, [cards] ]] and iterate through them (for each player) and then for each card
    let entries = Object.entries(cardPlayers);
    entries.forEach(player => {
        let name = player[0];
        let cards = player[1];
        let sum = 0;

        cards.forEach(card => {
            let cardValue = 0;
            let cardPower = 0;
            let currentCard = card.split(``);
            let cardLength = currentCard.length;
            if (cardLength === 2) {
                cardValue = Number(values[currentCard[0]]);
                cardPower = power[currentCard[1]];
                sum += cardValue * cardPower;
            } else {
                cardValue = Number(currentCard[0] + currentCard[1]);
                cardPower = currentCard[2];
                sum += cardValue * power[cardPower];
            }
        });
        console.log(`${name}: ${sum}`);
    })
}

cardGames([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);
