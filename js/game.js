function playGame(playerChoice){
const choices =[ 'rock' , 'paper','scissors'];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];


let resultText=`You chose ${playerChoice}. pirate cat chose ${computerChoice}.`;

if(playerChoice === computerChoice){
  resultText += "Its a tie!"
}
else if(
  (playerChoice=== 'rock' && computerChoice === 'scissors') ||
  (playerChoice=== 'paper' && computerChoice === 'rock') ||
  (playerChoice=== 'scissors' && computerChoice === 'paper') 
){ 
  resultText += " you win! horray"

}else{
  resultText += "you lost lol!"
}
document.getElementById("result").innerText = resultText;
}