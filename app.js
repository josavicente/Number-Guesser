
document.getElementById('guess-btn').addEventListener('submit', checkNumber);

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessNumber = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      
const numberToGuest = Math.floor(Math.random() * 10) + 1;

let   min = 1,
      max = 10,
      remainingGuests = 3;


function checkNumber(e){
      if (guessNumber.value === numberToGuest){
            console.log('Correct Number');
      }else{
            console.log('Incorrect number');
      }
};