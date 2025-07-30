const number = Math.floor(Math.random() * 20) + 1;

const form = document.querySelector('form');
const input = document.querySelector('input[name="guess"]');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const guess = Number(input.value);

    if (isNaN(guess) || guess < 1 || guess > 20) {
        result.innerText = "Please enter a number between 1 and 20.";
        return;
    }

    if (guess === number) {
        result.innerText = "You got it right!";
    } else if (guess < number) {
        result.innerText = "Too low. Guess higher."
    } else {
        result.innerText = "Too high. Guess lower."
    }
})