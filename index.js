const adviceLabel = document.querySelector('.adviceNo');
const errorDiv = document.querySelector('.error');
const quoteLabel = document.querySelector('.quote');
const diceBtn = document.querySelector('.dice');

//get random quote
function showError() {
  errorDiv.classList.remove('hidden');
}

//display error & remove after five seconds
function displayError() {
  errorDiv.classList.remove('hidden');
  setTimeout(() => {
    errorDiv.classList.add('hidden');
  }, 5000);
}

//get quote
async function getQuote() {
  quoteLabel.innerHTML = `Loading Quote...`;
  adviceLabel.innerText = `ADVICE #`;
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const { slip } = await response.json();

    adviceLabel.innerText = `ADVICE #${slip.id}`;
    quoteLabel.innerHTML = `&ldquo;${slip.advice}&rdquo;`;
  } catch (error) {
    displayError();
    quoteLabel.innerHTML = '';
  }
}

//dice on click event
diceBtn.addEventListener('click', () => {
  getQuote();
});

//call function to get quote after page initialized
getQuote();
