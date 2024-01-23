//Initial scores for the user and the computer
let userScore=0;
let computerScore=0;

displayUserScore = document.createElement('p');
displayCompScore = document.createElement('p');
displayTie = document.createElement('h2');
displayMoves = document.createElement('p');
scoreContainer = document.querySelector(".score");
scoreContainer.appendChild(displayTie);
scoreContainer.appendChild(displayMoves);
scoreContainer.appendChild(displayUserScore);
scoreContainer.appendChild(displayCompScore);


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


//Takes the user's input and the computer's choice and compares them to determine the winner
//If there is a tie, the round starts again.
//Adds a point to whoever the winner is.
function playRound(user) {

    displayTie.textContent = "";
    let computer = computerValue();
    user = this.classList.value;


    if (computer == user) {
        displayTie.textContent = "Tie! Try again.";
        game();

    } else if (computer === "rock" & user === "paper") {
        userScore++
        checkWinner();
        
    } else if (computer === "paper" & user === "scissors") {
        userScore++
        checkWinner();
    } else if (computer === "scissors" & user === "rock") {
        userScore++
        checkWinner();
    } else {
        computerScore++
        checkWinner();
    };

    displayMoves.textContent = "Your Move: " + user + "Computer Move: " + computer;

};


//Check the scores of each player each round. Once a player reaches 5 points, 
//the winner is announced and the scores are reset to 0
function checkWinner() {

    if (userScore === 5) {
        alert("You won!");
        userScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert("Computer won!")
        userScore = 0;
        computerScore = 0;
    }

    displayUserScore.textContent = "You: " + userScore;
    displayCompScore.textContent = "Computer: " + computerScore;
};


//Recognizes when a move option is clicked and initiates the round
function game() {
    let rockBtn = document.querySelector('.rock');
    let paperBtn = document.querySelector('.paper');
    let scissorsBtn = document.querySelector('.scissors');


    rockBtn.addEventListener('click', playRound);
    paperBtn.addEventListener('click', playRound);
    scissorsBtn.addEventListener('click', playRound);

};


game();



