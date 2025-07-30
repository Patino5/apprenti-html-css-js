// Part 1. 
let fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1])

// Part 2. Modifying Arrays
fruits.splice(1,1, "blueberry");
fruits.push("elderberry");
fruits.unshift("apricot");
console.log(fruits);

let firstFruit = fruits.shift();
console.log(`${firstFruit}, was removed from front of array fruits.`)
let lastFruit = fruits.pop();
console.log(`${lastFruit}, was removed from back of array fruits.`)

console.log(fruits);

// Part 3. Looping through an Array
fruits.forEach(elem => {
    console.log(elem);
})

// skip every other element
console.log("skip loop:")
for (let i = 0; i < fruits.length; i+= 2){
    console.log(fruits[i]);
}

// Part 4. Advanced Array Methods
console.log(fruits.indexOf("cherry"));
console.log(fruits.splice(fruits.indexOf("cherry"), 1));
fruits = fruits.concat(["fig", "grape", "honeydew"]);

console.log(fruits);

// Bonus Challenge: Finding the most Frequent Element
let randomNum;
let randomNumbers = [];
while (randomNumbers.length < 10) {
    randomNum = Math.floor(Math.random() * 5) + 1;
    randomNumbers.push(randomNum);
}
console.log(randomNumbers);

let frequencies = {}; // use a map to store values and frequencies

// for (let i = 0; i < randomNumbers.length; i++) {
//     const num = randomNumbers[i];
//     if (frequencies[num]) {         // check if num is in map and add 1 if there
//         frequencies[num]++;
//     } else {
//         frequencies[num] = 1;       // if not give it a value of 1
//     }
// }
randomNumbers.forEach(num => {
    
})
console.log(frequencies);

let mostFrequent = null;
let maxCount = 0;
for (let num in frequencies) {          // for each number in map 
    if (frequencies[num] > maxCount) {  // check if value is greater than maxCount
        maxCount = frequencies[num]     // set maxCount to value
        mostFrequent = num;             // set num to mostFrequent
    }
}
console.log(mostFrequent);
