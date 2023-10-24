'use strict';

let secretNumber, score, highscore;

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const checkGuess = function (guess) {
  if (!guess) {
    displayMessage('🛑 No guess!');
    document.querySelector('body').classList.add('shake');
    setTimeout(() => {
      document.querySelector('body').classList.remove('shake');
    }, 500);
  } else if (guess === secretNumber) {
    displayMessage('🎊 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    const message = guess > secretNumber ? '🗻 Too high!' : '🪫 Too low!';
    displayMessage(message);
    if (score > 1) {
      score--;
      updateScore(score);
    } else {
      displayMessage('😿 You lost the game');
      updateScore(0);
    }
  }
};

resetGame();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  checkGuess(guess);
});

document.querySelector('.again').addEventListener('click', resetGame);
