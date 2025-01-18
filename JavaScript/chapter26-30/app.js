// Question 1
var IntNum = prompt ("Enter a decimal positive integer:");
console.log (IntNum);
console.log(Math.round (IntNum));
console.log(Math.floor (IntNum));
console.log(Math.ceil (IntNum));

// Question 2
var IntNum = prompt ("Enter a decimal negative integer:");
console.log (IntNum);
console.log(Math.round (IntNum));
console.log(Math.floor (IntNum));
console.log(Math.ceil (IntNum));

// Question 3
var absoluteNum = prompt("Enter a number:");
console.log(Math.abs(absoluteNum));

// Question 4
var dicevalue = Math.floor(Math.random() * 6) + 1;
console.log("Random dice value :" + dicevalue);

// Question 5
var tossResult = Math.floor(Math.random() *2) + 1;
var coinValue;
if (tossResult === 1) {
    coinValue = "Tails";
} else {
    coinValue = "Heads";
}
console.log("Toss Result : " + tossResult);
console.log("Random coin value :" + coinValue);

// Question 6
var num = Math.floor(Math.random() * 100) + 1;

console.log("Random number between 1 and 100: " + num);

// Question 7
var userinput = prompt("Enter your weight in Kilo Grams:");
var weight = parseInt(userinput);
console.log("The weight of user is:" + userinput + " Kilograms");

// Question 8
var secretNumber = Math.floor(Math.random() * 10) + 1;
var input = prompt("Guess a number between 1 and 10:");
if (secretNumber === (input)) {
    alert("Congratulations! You guessed the correct number.");
} else {
    alert("Sorry, the correct number was " + secretNumber + ".");
}


