'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  let highscore = 0;

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No guess!';
    document.querySelector('body').classList.add('shake');

    // Remove the class after a delay
    setTimeout(() => {
      document.querySelector('body').classList.remove('shake');
    }, 500); // Adjust the delay (in milliseconds) to control the duration of the shake effect
  }
  // When the correct number is guessed
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🗻 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // When the guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🪫 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😿 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Restoring everything to its initial values when the "again" button is pressed
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
