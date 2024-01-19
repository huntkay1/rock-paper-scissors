//Initial scores for the user and the computer
let userScore=0;
let computerScore=0;

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
function getUserInput() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    
    return userInput.toLowerCase()
}


//Takes the user's input and the computer's choice and compares them to determine the winner
//If there is a tie, the round starts again.
function playRound() {

    let computer = computerValue();
    let user = getUserInput();


    if (computer == user) {
        alert("tie");
        playRound();

    } else if (computer === "rock" & user === "paper") {
        userScore++
        alert("you win");
        alert("You:" + userScore + "\n" + "Computer:" + computerScore)
        
    } else if (computer === "paper" & user === "scissors") {
        userScore++
        alert("you win");
        alert("You:" + userScore + "\n" + "Computer:" + computerScore)
    } else if (computer === "scissors" & user === "rock") {
        userScore++
        alert("you win");
        alert("You:" + userScore + "\n" + "Computer:" + computerScore)
    } else {
        computerScore++
        alert("computer wins");
        alert("You:" + userScore + "\n" + "Computer:" + computerScore)
    }

}

function game() {

    let roundNum = 1;

    alert("Round:" + roundNum)
    playRound()
    

    while(roundNum < 5) {
        roundNum++
        alert("Round:" + roundNum)
        playRound()
        
    } 
}


game();








