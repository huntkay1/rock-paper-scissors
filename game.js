//Picks a random number between 1 and 3 for the computer's choice
function getRandomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max-min) + 1);
}

//Takes the computer's choice and translates it into rock, paper, or scissors
function computerValue() {
    let computerResponse = getRandomNumber();

    if (computerResponse == 1) {
        return "rock"
    } else if (computerResponse == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

//Asks the user for their move 
function getInput() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    
    return userInput.toLowerCase()
}

//Grabs the computer and user values and sends the moves to theGame to be
//checked for a winner.
function initiateGame() {
    let computer = computerValue();
    let user = getInput();

    playRound(user, computer) 
}

//Takes the user's input and the computer's choice and compares them to determine the winner
function playRound(user, computer) {

    if (computer == user) {
        alert("tie");
        initiateGame();

    } else if (computer === "rock" & user === "paper") {
        alert("you win");
    } else if (computer === "paper" & user === "scissors") {
        alert("you win");
    } else if (computer === "scissors" & user === "rock") {
        alert("you win");
    } else {
        alert("computer wins");
    }

}

initiateGame();








