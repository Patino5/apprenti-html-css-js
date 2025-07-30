flipCoin = (guess) => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // clear past guess

    const flip = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails"

    const resultMessage = document.createElement('div');
    resultMessage.innerHTML = `
        <p>You guessed ${guess}...</p>
        <p>The coin flips and comes up ${flip}.</p>
        <p>${guess === flip ? "Good Guess!" : "Sorry! Maybe next time."}</p>
        `;

    resultDiv.appendChild(resultMessage);
}

document.getElementById('headsBtn').addEventListener('click', () => flipCoin('heads'));
document.getElementById('tailsBtn').addEventListener('click', () => flipCoin('tails'));