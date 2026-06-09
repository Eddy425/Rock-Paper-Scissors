function playGame(playerMove) {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'It is a tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'It is a tie';
    } else {
      result = 'You lose';
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else {
      result = 'It is a tie';
    }
  }

  document.getElementById('moves').innerHTML =
    `You picked ${playerMove}. Computer picked ${computerMove}.`;

  document.getElementById('result').innerHTML =
    result;
}