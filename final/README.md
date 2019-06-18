# **Final Project, How Lucky r u?**
黃哲全 B05601029

---
***Some said that every people has its own destiny. Hence, when they fail, when they are being outcompeted they blame their destiny. Destiny also control our luckiness, have you ever had that lucky day? When all things
                                            turns out as expected? Have you had your bad day? When every struggle you do seems to bear no result?***
                                            
***How to find out whether you are lucky or not today? This question also makes me confuse so I created a guessing game, which you can guess 3 times, if youre lucky then you will get it right, if youre not then it is better for you to stay at home.*** 

***遊戲規則, The random number generated is 0-10, each time play the number will be different. Each round will be given 3 times if fail then not lucky,if win then lucky.***
                                            
                                            
                                            
                                            


*Generating random number*

```
var mysteryNumber = Math.floor(Math.random() * 11);
```
*No need to click guess, just click enter in keyboard*
```
window.addEventListener("keydown", keydownHandler, false);

    function keydownHandler(event) {
        if (event.keyCode === 13) {
            validateInput();
        }
    }
```
*Validating whether it is a number or not*
```

        function validateInput() {
        playersGuess = parseInt(input.value);

        if (isNaN(playersGuess)) {
            output.innerHTML = "Please enter a number.";
        } else {
            playGame();
        }
    }
```
*playGame function, when play guessmade will +1 and guessremaining will -1, stating their gameState with string, telling players also the guess is too high or too low, and if guessremaining<1 it will end the game.*
```
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
```
Endgame function if win then youre lucky today, if lose then it should be better to stay at home.
```
< function endGame() {
        if (gameWon) {
            output.innerHTML = "You're Lucky Today!";

        } else {
            output.innerHTML = "You're Unlucky, Stay at Home!<br>" + "The number was: " + mysteryNumber + ".";
        }
    }
```