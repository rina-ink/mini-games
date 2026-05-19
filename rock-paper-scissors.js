const choices = ['rock', 'paper', 'scissors'];

// const playerChoice = 'rock'; // swap this for another choice

// player choice from terminal
const playerChoice = process.argv[2];

// random computer choice
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);

// validation
if (!choices.includes(playerChoice)) {
    //console.log('Invalid choice! Use rock, paper, or scissors.');
    console.error('Invalid choice! Use rock, paper, scissors.');
} else if (playerChoice === computerChoice) {
    console.log("It's a tie!");
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper'  && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    console.log('Player wins!');
    /* 
    rock beats scissors
    paper beats rock
    scissors beats paper */
} else {
console.log('Computer wins!');
}