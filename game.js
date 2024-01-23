//Initial scores for the user and the computer
let userScore=0;
let computerScore=0;

//Picks a random number between 1 and 3 for the computer's choice
function getRandomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(4);
    return Math.floor(Math.random() * (max-min) + 1);
};

//Takes the computer's choice and translates it into rock, paper, or scissors
function computerValue() {
    let computerResponse = getRandomNumber();

    if (computerResponse == 1) {
        return "rock"
    } else if (computerResponse == 2) {
        return "paper"
    } else {
        return "scissors"
    };
};

//Asks the user for their move 
// function getUserInput() {
//     let userInput = prompt("Rock, Paper, or Scissors?");
    
//     return userInput.toLowerCase();
// };

function playerSelection() {

};


//Takes the user's input and the computer's choice and compares them to determine the winner
//If there is a tie, the round starts again.
//Adds a point to whoever the winner is.
function playRound(user) {

    let computer = computerValue();
    user = this.classList.value;


    if (computer == user) {
        alert("tie");
        game();

    } else if (computer === "rock" & user === "paper") {
        userScore++
        alert("You win that round.");
        alert("You: " + userScore + "\n" + "Computer: " + computerScore)
        
    } else if (computer === "paper" & user === "scissors") {
        userScore++
        alert("You win that round.");
        alert("You: " + userScore + "\n" + "Computer: " + computerScore)
    } else if (computer === "scissors" & user === "rock") {
        userScore++
        alert("You win that round.");
        alert("You: " + userScore + "\n" + "Computer: " + computerScore)
    } else {
        computerScore++
        alert("Computer win that round.");
        alert("You: " + userScore + "\n" + "Computer: " + computerScore)
    };

};

// Plays 5 rounds of the game
// function game() {

//     let roundNum = 1;

//     while(roundNum < 6) {
//         alert("Round:" + roundNum)
//         roundNum++
//        playRound() 
//     } ;

//     if (userScore > computerScore) {
//         alert("You win the game! :)")
//     } else {
//         alert("Computer wins the game. :(")
//     };

// };

// game();


function game() {
    let rockBtn = document.querySelector('.rock');
    let paperBtn = document.querySelector('.paper');
    let scissorsBtn = document.querySelector('.scissors');


    rockBtn.addEventListener('click', playRound);
    paperBtn.addEventListener('click', playRound);
    scissorsBtn.addEventListener('click', playRound);

    }


game();



