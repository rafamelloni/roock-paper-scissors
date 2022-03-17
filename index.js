let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("draw")

    }

}

if (
    (playerSelection === "Rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
) {
    pleyerSelection++;
    roundWinner = pleyerSelection
}
if (
    (computerSelection === "Rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
) {
    computerSelection++;
    roundWinner = computerSelection
}

l
array = ["rock", "paper","scissors"]

 function computerDecision(){
let computerItem = Math.random() * array.lenght
 }
