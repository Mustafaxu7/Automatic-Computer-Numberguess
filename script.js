"use strict"
// DRY - Do not repeat yourself
// KISS - Keep it simple stupid 

    
let minNumber = 1
let humanNumber = 311
let maxNumber = 1000
let computerGuess = 0
let guesses = 0

while (computerGuess != humanNumber) {
    guesses += 1
    computerGuess = Math.floor((maxNumber + minNumber) / 2)
    while (computerGuess > humanNumber) {
        guesses += 1
        maxNumber /= 2
        computerGuess = Math.floor((maxNumber + minNumber) / 2)

        if(computerGuess < humanNumber) {
            while(computerGuess < humanNumber) {
            guesses += 1
            minNumber += maxNumber
            computerGuess = Math.round((maxNumber + minNumber) / 2)
            break;
            }
        }


        else if (computerGuess == humanNumber) {
            console.log("I guessed it, the number is " + computerGuess)
            console.log("I needed " + guesses + " guesses")
            break;
        }
    }


        while (computerGuess < humanNumber) {
        guesses += 1
        minNumber = maxNumber / 2
        computerGuess = Math.floor((maxNumber + minNumber) / 2)

        if(computerGuess < humanNumber) {
            while(computerGuess < humanNumber) {
            guesses += 1
            minNumber += maxNumber
            computerGuess = Math.round((maxNumber + minNumber) / 2)
            break;
            }
        }


        else if (computerGuess == humanNumber) {
            console.log("I guessed it, the number is " + computerGuess)
            console.log("I needed " + guesses + " guesses")
            break;
        }
    }

}