let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.getElementById('score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

let isAuto = false;
let intervalId;

function autoPlay(){
  if(!isAuto){
    intervalId = setInterval(function(){
    const playerMove = pickComputerMove();
    playGame(playerMove);
  }, 500);
  isAuto = true;
  } else {
    clearInterval(intervalId);
    isAuto = false;
  }

}

function scoreUpdate(result) {
  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You lose') {
    score.losses += 1;
  } else if (result === 'It is a tie') {
    score.ties += 1;
  }
  document.getElementById('score').innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    localStorage.setItem('score', JSON.stringify(score));
}

function pickComputerMove(){
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return 'rock';
  } else if (randomNumber < 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'It is a tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'It is a tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'It is a tie';
    }
  }
  scoreUpdate(result);
  document.getElementById('moves').innerHTML =
    `You picked ${playerMove}. Computer picked ${computerMove}.`;

  document.getElementById('result').innerHTML =
    result;
}
