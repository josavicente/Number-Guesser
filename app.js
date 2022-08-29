

let   min = 1,
      max = 10,
      remainingGuests = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessNumber = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

      // Assign min and max UI

minNum.textContent = min;
maxNum.textContent = max;
//Listen Submit

guessBtn.addEventListener('click', checkNumber);

const numberToGuest = Math.floor(Math.random() * 10) + 1;
console.log(numberToGuest);



function checkNumber(e){
      let guess = parseInt(guessNumber.value);
      if (isNaN(guess) || guess < min || guess > max ){
            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
      } else {
            if (guess === numberToGuest){
                  showGuessResult(`${numberToGuest} is correct. You win!`, 'green');
            }else{
                  remainingGuests -=1;
                  if (remainingGuests === 0){
                        showGuessResult(`Game Over! The correct number is: ${numberToGuest}`, 'red');
                  }else{
                        setMessage(`${guess} is incorrect. Remaining tries: ${remainingGuests}`, 'red');
                  }
                  
            }
      }
};


function showGuessResult(msg, color) {
      guessNumber.disabled = true;
      guessNumber.style.borderColor = color;
      setMessage(msg,color);
}

function setMessage(msg, color) {
      message.textContent = msg;
      message.style.color = color;
};