// 當文件已經全載入至記憶體時，開始執行程式
$(document).ready(function() {

    var mysteryNumber = Math.floor(Math.random() * 11);
    var playersGuess = 0;
    var guessesRemaining = 3;
    var guessesMade = 0;
    var gameState = "";
    var gameWon = false;

    //The input and output fields
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    //The button
    var button = document.querySelector("button");
    button.style.cursor = "pointer";
    button.addEventListener("click", clickHandler, false);

    window.addEventListener("keydown", keydownHandler, false);

    function keydownHandler(event) {
        if (event.keyCode === 13) {
            validateInput();
        }
    }

    function clickHandler() {
        validateInput();
    }

    function playGame() {
        guessesRemaining--;
        guessesMade++;
        gameState = "Guess:" + guessesMade + ", Remaining:" + guessesRemaining;
        playersGuess = parseInt(input.value);

        if (playersGuess > mysteryNumber) {
            output.innerHTML = "That's too high." + gameState;
            if (guessesRemaining < 1) {
                endGame();
            }
        } else if (playersGuess < mysteryNumber) {
            output.innerHTML = "That's too low." + gameState;
            if (guessesRemaining < 1) {
                endGame();
            }
        } else {
            gameWon = true;
            endGame();
        }
    }

    function endGame() {
        if (gameWon) {
            output.innerHTML = "You're Lucky Today!";

        } else {
            output.innerHTML = "You're Unlucky, Stay at Home!<br>" + "The number was: " + mysteryNumber + ".";
        }
    }

    function validateInput() {
        playersGuess = parseInt(input.value);

        if (isNaN(playersGuess)) {
            output.innerHTML = "Please enter a number.";
        } else {
            playGame();
        }
    }
})