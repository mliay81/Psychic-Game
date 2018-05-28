// Psychic Game Logic


// Board setup
var wins = 0;
var losses = 0;
var remaining = 9;
var guesses = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(alphabet)

    if (alphabet.indexOf(userGuess) > -1) {

        if (userGuess === letter) {
            wins++;
            remaining = 9;
            guesses = [];
        }

        if (userGuess != letter) {
            remaining --;
            guesses.push(userGuess);
        }

        if (remaining === 0) {
            remaining = 9;
            losses ++;
            guesses = [];
        }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Your guesses so far: " + guesses;

    }


}


