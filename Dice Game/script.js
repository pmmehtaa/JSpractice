'use strict';
let x = 0;
let activePlayer = 0;
let tot1 = 0;
let tot2 = 0;

let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');
let cr1 = document.querySelector('#current--0');
let cr2 = document.querySelector('#current--1');
let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

score1.textContent = 0;
score2.textContent = 0;
let scores = [0, 0];
dice.classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click', function () {
  let number = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${number}.png`;
  console.log(number);

  //******************ROLL****************/

  if (number !== 1) {
    //Number can be 2,3,4,5,6
    x += number;
    document.getElementById(`current--${activePlayer}`).textContent = x;
  } else {
    //NUmber is 0 --> Switch Player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    x = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});

///*********HOLD****************************/

let hold = document.querySelector('.btn--hold');
hold.addEventListener('click', function () {
  cr1 = x;

  scores[activePlayer] += cr1;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  x = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  if (scores[0] >= 20 || scores[1] >= 20) {
    alert(`Player ${!activePlayer}Wins`);
  }

  console.log(scores);
});

let reset = document.querySelector('.btn--new');
reset.addEventListener('click', function () {
  scores[0] = 0;
  scores[1] = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  console.log(scores);
});
