function playGame() {
    const userChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
  
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
      alert("Invalid. Choose 'rock', 'paper', or 'scissors'");
      return;
    }
  
    const computerChoiceNumeric = Math.floor(Math.random() * 3);
    let computerChoice;
  
    if (computerChoiceNumeric === 0) {
      computerChoice = "rock";
    } else if (computerChoiceNumeric === 1) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
  
    let result;
  
    if (userChoice === computerChoice) {
      result = "It's a tie! 🏳️";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      result = "You win! 🏆";
    } else {
      result = "Computer wins! 💻";
    }
  
    alert(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`);
  }
  
  playGame();