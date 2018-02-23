//array of letters for the computer to choose from
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []

// computer chooses a random letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);

// player guesses letters
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);


    // app records what letters have been guessed so far
    guessesSoFar.push(userGuess)


// Trying to make an if statement that says they should only click letters... no other keys
    if (letters.includes(userGuess)) {
        // if/then statement for wins and losses
        if (userGuess === computerGuess) {

            wins++;
            console.log("win!");
            // make sure game restarts after each win/loss w/o refreshing the game
            function resetGame() {
                guessesLeft = 10;
                computerGuess = letters[Math.floor(Math.random() * letters.length)];
                console.log(computerGuess);
                guessesSoFar = []
            }

            resetGame();
        }

        else if (guessesLeft === 0) {
            losses++;
            function resetGame() {
                guessesLeft = 10;
                computerGuess = letters[Math.floor(Math.random() * letters.length)];
                console.log(computerGuess);
                guessesSoFar = []
            }

            resetGame();
        }


        var html =
            "<h2>Guess What Letter I'm Thinking Of!</h2>" +
            
            '<img src="assets/images/question.gif" alt="Kids questioning" id="question">' +

            "<p>Wins: " + wins + "</p>" +

            "<p>Losses: " + losses + "</p>" +

            "<p>Guesses Left: " + guessesLeft-- + "</p>" +

            "<p>Your Guesses So Far: " + guessesSoFar + "</p>";

        document.querySelector("#game").innerHTML = html;

    }

    else if (userGuess !== letters) {
        alert("You must choose a letter!")
    }
}




