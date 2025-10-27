//Rock Paper Scissors vs Computer
//writting logic that get the computer choice
function playGame(){
    let humanScore = 0;
    let computerScore = 0;


function getComputerChoice(){
    let randomNumbers = Math.random();

    if (randomNumbers < 0.33){
        return "rock";
    } else if (randomNumbers <0.66){
        return "paper";
    }else {
        return "scissors"
    }

}
console.log(getComputerChoice());



//write the logic to get the human choice
function getHumanChoice(){
    const userChoice = prompt("Rock, Paper, Scissors");
    return userChoice.toLowerCase();
    
}


// declare the players score variables


function playRound(humanChoice, computerChoice){
     humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("it's a Tie")
        return;
    }
    if(
    (humanChoice ==='rock' && computerChoice === 'scissors' ) ||
    (humanChoice ==='paper' && computerChoice === 'rock' ) ||
    (humanChoice ==='scissors' && computerChoice === 'paper' ))
    {
        humanScore++;
        console.log(`You win ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    }


}

//write the logic to play the entire game

for(let i=0; i< 5; i++){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
}
console.log('Final Score:');
console.log('human:',humanScore, 'computer:', computerScore);

if(humanScore === computerScore){
    console.log('it is a tie');
} else if(computerScore > humanScore){
    console.log('you lose');
} else{
    console.log('You win the game')
}
}
playGame();