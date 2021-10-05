


function computerPlay() {
	let options = ["rock", "paper", "scissors"];
 	return (options[Math.floor(Math.random() *options.length)]);
 	
}


function game() {
	
	playRound();
	playRound();
	playRound();
	playRound();
	playRound();

}



function playRound(playerSelection,computerSelection) {
	let playerScore = 0;
	let computerScore = 0;
	computerSelection = computerPlay();
	playerSelection = prompt("What do you choose?", "e.g. rock, paper, or scissors");
	playerSelection = playerSelection.toLowerCase();
	console.log("The computer selected: " + computerSelection);
	console.log("You chose: " + playerSelection);


	if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
		console.log("We have a tie!")
		console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
			console.log("You win!");
			playerScore++;
			console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
			console.log("You lose!");
			computerScore++;
			console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else {

		console.log("Oops, something went wrong!");
	}


}




game();
//playRound();
console.log("The final score is: " + playerScore + " for you, and " + computerScore + " for the computer");







// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));









// function playRound(playerSelection) {
//   computerSelection = computerPlay();
//   playerSelection = prompt("what is your choice?");
//   playerSelection.toLowerCase();
//   console.log(playerSelection);

// }

// function computerPlay() {

// 	let options = ["rock", "paper", "scissors"];
// 	computerSelection = (options[Math.floor(Math.random() *options.length)])
// 	return computerSelection;
// }

// // const playerSelection = "rock";
// // const computerSelection = computerPlay();
// // console.log(playRound(playerSelection, computerSelection));
