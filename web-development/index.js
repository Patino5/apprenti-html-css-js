// Part one
const message = "Welcome to JavaScript!";

console.log(message.length);


// firstLetter of Message 
const firstLetterOfMessage = message.charAt(0);
console.log(firstLetterOfMessage);

// upper and lower case message
console.log(message.toUpperCase());
console.log(message.toLowerCase());


// get 'JavaScript' extracted from message
const indexOfJavaScript = message.indexOf("JavaScript");
console.log(message.substring(indexOfJavaScript,21));

// replace 'JavaScript' to 'Coding'
console.log(message.replace("JavaScript", "Coding"));

// Part 2
// print a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);

// 2. Calculate and print 
console.log(Math.sqrt(144));
console.log(Math.pow(3, 4));
console.log(Math.abs(-25));

// Round the number 7.8 using:
const number = 7.8
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.trunc(number));

// Calculate and print the cosine of 45 deg (Math.cos())
console.log(Math.cos(45));

// Ask user to enter name and store in a variable and print hello message.
const userName = prompt("What is your name?")
alert(!userName ? `Hello guest.` : `Hello ${userName}! Your name has ${userName.length} characters.`);
// Generate a random number between 1 and 10, and include it in a sentence.
const luckyNum = Math.floor(Math.random() * (10 - 1) + 1);
const msg = `${userName}, did you know? Your lucky number for today is ${luckyNum}!`
console.log(msg)

let age = Math.floor(Math.random() * 25) + 5; // Random age between 5 and 30
if (age >= 18) {
 console.log(`You are ${age} years old. You can watch an R-rated movie.`);
} else if (age >= 13 && age < 18) {
 console.log(`You are ${age} years old. You can watch PG-13 movies.`);
} else {
 console.log(`You are ${age} years old. You can only watch G-rated
movies.`);
}

let dayNumber = new Date().getDay(); // Get current day (0 = Sunday, 6 =Saturday)
let day;
switch(dayNumber) {
 case 0: day = "Sunday"; break;
 case 1: day = "Monday"; break;
 case 2: day = "Tuesday"; break;
 case 3: day = "Wednesday"; break;
 case 4: day = "Thursday"; break;
 case 5: day = "Friday"; break;
 case 6: day = "Saturday"; break;
 default: day = "Unknown";
}
console.log(`Today is ${day}.`);

let roll = 0;
let rollCount = 0;
while (roll !== 6) {
 roll = Math.floor(Math.random() * 6) + 1; // Roll dice (1-6)
 console.log(`You rolled a ${roll}.`);
 rollCount++;
}
console.log(`You got a 6! It took you ${rollCount} rolls.`);


let word = "JavaScript";
for (let i = 0; i < word.length; i++) {
 console.log(`Character at index ${i}: ${word.charAt(i)}`);
}

let str = "CodeAlong";
for (let i = str.length - 1; i >= 0; i--) {
 console.log(str.charAt(i));
}