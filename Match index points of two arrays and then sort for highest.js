function winnerOfTrick(cards, players) {
    let results = {};

    // Convert picture cards to numbers and remove suits

    for (let p = 0; p < cards.length; p++) {
        if (cards[p].charAt(0) == "A") {
            cards[p] = 14;
        } else if (cards[p].charAt(0) == "K") {
            cards[p] = 13;
        } else if (cards[p].charAt(0) == "Q") {
            cards[p] = 12;
        } else if (cards[p].charAt(0) == "J") {
            cards[p] = 11;
        }
        else if (cards[p].charAt(0) == "T"){
            cards[p] = 10;
        } 
        else {
            cards[p] = cards[p].charAt(0);
        }
    }

    // create object with players and their hands

    for (let i = 0; i < cards.length; i++) {
        results[players[i]] = cards[i];
    }

    // sort hands in order of value
    cards.sort(function (a, b) {
        return b - a;
    });

    let winningHand = cards[0];
    let winners = [];


    // add the winners to an array
    for (let x in results) {
        let score = results[x];
        if (results[x] == winningHand) {
            winners.push(x);
        }
    }

    // Create the results from the winners array
    if (winners.length == 1) {
        return winners[0] + " wins";
    } else {
        var playersTied = "";
        for (var winnersPos = 0; winnersPos < winners.length; winnersPos++) {
            playersTied += winners[winnersPos] + ",";
        }
        playersTied = playersTied.substr(0, playersTied.length - 1);
        return "Tie! (" + playersTied + ")";
    }
}

console.log(winnerOfTrick(["AH", "4D", "2H", "4S", "AH"], ["GgbA", "mZoIs", "S'Lg", "Jimmy", "Sally"]));