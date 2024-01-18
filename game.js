function getRandomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max-min) + 1);
}

function translateNumber() {
    let computerResponse = getRandomNumber();

    if (computerResponse == 1) {
        return "rock"
    } else if (computerResponse == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function theGame(userInput) {
    computer = translateNumber();

    if (computer == userInput) {
        alert("tie")
    } else if (computer === "rock" & userInput === "paper") {
        alert("you win")
    } else if (computer === "paper" & userInput === "scissors") {
        alert("you win")
    } else if (computer === "scissors" & userInput === "rock") {
        alert("you win")
    } else {
        alert("computer wins")
    }


}

userInput = prompt("Rock, Paper, or Scissors?")

theGame(userInput.toLowerCase())






