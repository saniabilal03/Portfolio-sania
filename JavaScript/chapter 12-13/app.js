//Question number 1
var input = prompt("Enter a single character:");

if (input.length === 1) {
  if (input >= '0' && input <= '9') {
    alert("It's a number.");
  } else if (input >= 'A' && input <= 'Z') {
    alert("It's an uppercase letter.");
  } else if (input >= 'a' && input <= 'z') {
    alert("It's a lowercase letter.");
  } else {
    alert("It's something else.");
  }
} else {
  alert("Please enter only one character.");
}

//Question number 2
var int1 = prompt("Enter the first number");
var int2 = prompt("Enter the second number");

if (int1 > int2) {
alert( "the first number is greater than the second" );
} else if (int1 < int2) {
  alert("second number is greater than the first"); }
  else {
  alert("Both numbers are equal");
}

//Question number 3
var int1 = prompt("Enter the first number");
if (int1 > 0) {
    alert(int1 + " is a positive number.");
} else if (int1 < 0) {
    alert(int1 + " is a negative number.");
} else("The number is zero.");

//Question number 4

var input = prompt("Enter a string");
if (input.length === 1) {
    if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
    alert("The string is a vowel.");
} else {
    alert("The string is not a vowel.");
}
}else {
    alert("Enter one character only.");
}

//Question number 5
var correctpassword = "password123";
var userpassword = prompt("Enter your password");

if (userpassword === correctpassword) {
    alert("Correct password!");
} else {
    alert("Incorrect password")
}

//Question number 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

//Question number 7
let time = prompt("Enter time in 24-hour format");
if (time >= "0000" && time < "1200") {
    alert("Good morning");
}
else if (time >= "1200" && time < "1700") {
    alert("Good afternoon");
} else if (time >= "1700" && time < "2100") {
    alert("Good evening");
}
 else if (time >= "2100" && time < "2359") {
    alert("Good night");
} else {
    alert("Invalid time format");
}

