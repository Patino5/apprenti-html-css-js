// part 1. If Statements (Even or odd Checker)

randomNumberChecker = () => {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    if (randomNumber % 2 === 0) {
        console.log(`${randomNumber} is even.`)
    } else {
        console.log(`${randomNumber} is odd.`)
    }
}

randomNumberChecker();

// part 2. Switch statement Day of the week
getDayOfWeek = (number) => {
    let day;
    switch (number) {
        case 0: day = "Sunday";
        break;
        case 1: day = "Monday";
        break;
        case 2: day = "Tuesday";
        break;
        case 3: day = "Wednesday";
        break;
        case 4: day = "Thursday";
        break;
        case 5: day = "Friday";
        break;
        case 6: day = "Saturday";
        break;
        default: console.log("Out of range");
    }
    if (day) console.log(day);
}

getDayOfWeek(4);

// Roll dice until a six

rollDiceUntilSix = () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    let rollCount = 1;
    while (roll !== 6) {
        console.log(`You rolled a ${roll}.`);
        rollCount++;
        roll = Math.floor(Math.random() * 6) + 1;
    }
    console.log(`You Rolled a ${roll}! It took ${rollCount} tries.`)
}

rollDiceUntilSix();

// Part 4. For Loop(Counting down)
countDown = (startingNumber) => {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}
countDown(1);

// bonus reverse a word
reverseWord = (word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }
    console.log(reverseWord);
}

reverseWord("hello");

nums = [1, 3, 6, 7, 23, 556];

nums.forEach(elem => {
    console.log(`Value: ${elem}`)
});