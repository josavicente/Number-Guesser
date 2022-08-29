
document.getElementById('guess-value').addEventListener('submit', checkNumber);

const guessNumber = document.getElementById('guess-input');
const numberToGuest = Math.floor(Math.random() * 10) + 1;

let   min = 1,
      max = 10,
      numberOfGuests = 
      remainingGuests = 

function checkNumber(e){
      if (guessNumber.value === numberToGuest){
            console.log('Correct Number');
      }else{
            console.log('Incorrect number');
      }
};