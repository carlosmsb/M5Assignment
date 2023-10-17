function playGame() {
    const userChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
    
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid. Choose 'rock', 'paper', or 'scissors' only")
        return;
    }

const computerNumber = Math.floor(Math.random() * 3);
let computerChoice;

if (computerNumber === 0) {
    computerChoice = "rock 🪨";
} else if (computerNumber === 1) {
    computerChoice = "paper 🧻";
} else {
    computerChoice = "scissors ✂️"
}

let result;

if (userChoice === computerChoice) {
    result = "its a tie! 🏳️";
} else if (
    (userChoice === "rock 🪨" && computerChoice === "scissors ✂️") ||
    (userChoice === "scissors ✂️" && computerChoice === "paper 🧻") ||
    (userChoice === "paper 🧻" && computerChoice === "rock 🪨")
) {
    result = "You win!";
} else {
    result = "Computer wins!";
}
alert(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`);
} 

playGame();