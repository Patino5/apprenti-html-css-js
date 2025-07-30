let validInput = false;
let numRolls, input;

while (!validInput) {
    input = window.prompt("How many dice rolls should we make?")

    numRolls = Number(input);

    if (!isNaN(numRolls) && numRolls > 0) {
        validInput = true;
    }
}

let rolls = [];

for (let i = 0; i < 11; i++) {
    rolls.push(0);
}

let die1, die2, roll;

for (let i = 0; i < numRolls; i++) {
    // roll dice
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;

    roll = die1 + die2;
    // add one to count at the right index for the roll(-2)
    rolls[roll-2]++;
}

console.log(`We rolled the dice ${numRolls} times...`);
for(let i = 0; i < rolls.length; i++) {
    let num = i + 2;
    let count = rolls[i];
    let percentage = Math.round(count / numRolls * 100);

    console.log(`${num} was rolled ${count} times (${percentage}%)`);
}