'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
///////////////////////////////////FIXME BUG reikia patvarkyti koda,kad butu tvarkingas..
// FIXME Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score variable
let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number! ';
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number! ';
    displayMessage('🎉 Correct Number! ');

    document.querySelector('.number').textContent = secretNumber;

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }

    // Styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // When gues is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too hight! ' : '📉 Too low! ';
      displayMessage(guess > secretNumber ? '📈 Too hight! ' : '📉 Too low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💥 You lost the game! ';
      displayMessage('💥 You lost the game! ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore initial conditions
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  //   document.querySelector('.message').textContent = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  // Restore styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
