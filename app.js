

let   min = 1,
      max = 10,
      remainingGuests = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessNumber = document.querySelector('.guess-input'),
      message = document.querySelector('.message');

      // Assign min and max UI

minNum.textContent = min;
maxNum.textContent = max;
//Listen Submit

guessBtn.addEventListener('submit', checkNumber);

const numberToGuest = Math.floor(Math.random() * 10) + 1;




function checkNumber(e){
      const guess = parseInt(guessNumber.value);
      if ( isNaN(guess) || guess < min || guess > max ) {
            setMessage(`Please enter a number between ${min} and ${max}`);
      } else {
            if (guessNumber.value === numberToGuest){
                  console.log('Correct Number');
            }else{
                  console.log('Incorrect number');
            }
      }
      
};

function setMessage(message) {
      message.textContent = message;
      message.style.color = 'red';
};