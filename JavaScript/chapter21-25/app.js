//Question 1

var userfirstname = prompt("Enter your first name:");
var userlastname = prompt("Enter your last name:");
var userfullname = userfirstname + " " + userlastname;

console.log("Your full name is: " + userfullname);

//Question 2

var favoritePhone = prompt("Enter your favorite phone brand:");

var lengthOfBrand = favoritePhone.length;

console.log("The favorite phone brand is: " + favoritePhone);
console.log("The length of your favorite phone brand is: " + lengthOfBrand);

//Question 3
var string = "Pakistani";

var indexOfN = string.indexOf("n");

console.log("String:" + string);
console.log("Index of 'n': " + indexOfN);

//Question 4
var string2 = "Hello World"
var lastIndexOfl = string2.lastIndexOf("l");
console.log("String:" + string2);
console.log("Last index of 'l': " + lastIndexOfl);

//Question 5
var string3 = "Pakistani";
console.log("String:" + string3);
console.log("Character at index 3:" + string3.charAt(3));

// //Question 6
var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var fullName = firstName.concat(" ", lastName);
console.log("Hello, " + fullName + " Welcome!");

//Question 7
var city = "Hyderabad";
var replacement = city.replace('Hyder','Islam');
console.log("City:" + city);
console.log("After replacment:" + replacement);

// //Question 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replaceAll('and','&');
console.log(replace);

// //Question 9
var string = "472";
console.log("Value: " + string);
console.log("Type: " + typeof string);

var number = parseInt(string);

console.log("Value: " + number);

console.log("Type: " + typeof number);

// //Question 10
var Userinput = prompt("Enter a input:");
var upperCase = Userinput.toUpperCase();
console.log("User Input: " + Userinput);
console.log("Upper Case: " + upperCase);

//Question 11
var UserInput2  = prompt("Enter a input:");
var titleCase = UserInput2.charAt(0).toUpperCase() + UserInput2.slice(1).toLowerCase();
console.log("User Input: " + UserInput2);
console.log("Title Case: " + titleCase);

// Question 12
var num = 35.36 ;
var numstring = num.toString().replace(".","");
console.log("Number: " + num);
console.log("Result:" + numstring);

// Question 13
var username = prompt("Enter a username:");
if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
    alert("please enter valid username");
} else { 
    alert("username is valid")
}
console.log("username");

// Question 14
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var searchitem = prompt("Welcome to ABC Bakery! What would you like to order:");
var itemFound = false;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchitem.toLowerCase()) {
        itemFound = true;}
    }
    if (itemFound) {
        alert("yes the item is on the list");
        } else {
        alert("no the item is not on the list");
    };

// Question 16
var university = "University of Karachi";

var universityArray = university.split("");

for (var i = 0; i < universityArray.length; i++) {
    console.log(universityArray[i]);
}

//Question 17
var userinput = prompt("Enter a input:");
var lastcharacter = userinput.charAt(userinput.length - 1);
console.log("User Input: " + userinput);
console.log("Last Character: " + lastcharacter);

// // Question 18
var string = "The quick brown fox jumps over the lazy dog";
var words = string.toLowerCase().split(" "); 
var count = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}
console.log("Text : The quick brown fox jumps over the lazy dog")
console.log("There are " + count + " occurrences of the word the");