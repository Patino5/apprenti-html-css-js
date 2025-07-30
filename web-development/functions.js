let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
}
console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

// Part 5. Random Fortune Teller
tellFortune = () => {
    let fortunes = [
        "You will have a great day!",
        "A surprise is waiting for you.",
        "Something exciting is coming soon.",
        "Be cautious with your decisions today.",
        "Happiness is around the corner."
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}
console.log(tellFortune());
