
//making sure the page loads before the script starts running- ends with the '500' at the bottom//
window.setTimeout(function() {

// your js code goes here



//resets the score to zero-zero//
let playerScore = 0;
let computerScore = 0;

//chooses computer's throw//
function computerPlay() {
	let options = ["rock", "paper", "scissors"];
 	return (options[Math.floor(Math.random() *options.length)]);
 	
}

//loops through the game five times//
function game() {
	
	for (let i = 0; i < 5; i++) {
		playRound()
	}

}
////////////////////////////////////



//plays the actual game//
function playRound(playerSelection,computerSelection) {
	
	computerSelection = computerPlay();
	playerSelection = prompt("What do you choose?", "e.g. rock, paper, or scissors");

	playerSelection = playerSelection.toLowerCase();
	console.log("The computer selected: " + computerSelection);
	console.log("You chose: " + playerSelection);


	if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
		console.log("We have a tie!")
		console.log("The score is still: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
			console.log("You win!");
			++playerScore;
			console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
			console.log("You lose!");
			++computerScore;
			console.log("The score is: " + playerScore + " for you, and " + computerScore + " for the computer");
	} else {

		console.log("Oops, something went wrong!");
		console.log("The score is still: " + playerScore + " for you, and " + computerScore + " for the computer");
	}


}


//calling the function to play the game five times//
game();


//summarizes the score//

console.log("The final score is: " + playerScore + " for you, and " + computerScore + " for the computer");

if(playerScore > computerScore) {
	console.log("You won!");
} else if (playerScore == computerScore) {
	console.log("Folks, we have a tie!");
} else {
	console.log("You got beat by the computer my friend, better luck next time");
}

}, 500);



