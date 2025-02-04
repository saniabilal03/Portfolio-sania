//Question 1
var date = new Date();
console.log(date);

//Question 2

var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
var date = new Date();
var currentMonth = months[ date.getMonth()];

console.log("Current month: " + currentMonth);

//Question 3

var days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
var date = new Date();
var currentDay = days[ date.getDay()];

console.log("Today is " + currentDay);

//Question 4
var currentDate = new Date();
var day = currentDate.getDay();

if (day === 0 || day === 6) {
    alert("Its Fun Day");
}

//Question 5
var currentDate = new Date().getDate();
if (currentDate < 16) {
    console.log("First fifteen days of the month")
} else {
    console.log("Last days of the month")
}

//Question 6
var currentDate = new Date();
var Milliseconds = currentDate.getTime();
var Minutes = Milliseconds / (1000 * 60);

console.log("Current Date: " + currentDate);
console.log("Elapsed milliseconds since January 1, 1970 " + Minutes)
console.log("Elapsed minutes since January 1, 1970 " + Minutes);

//Question 7

var currentHour = new Date().getHours();
if (currentHour < 12) {
    console.log("Its AM");
} else {
    console.log("Its PM");
}

// Question 8

var laterDate = new Date(2020,11,31);
console.log(laterDate);

// Question 9

var currentDate = new Date();
var firstRamadan = new Date('18 june, 2023');
var difference = currentDate - firstRamadan;
var daysPassed = Math.floor(difference / (1000 * 60 * 60 *24));

console.log( daysPassed + " days have passed since 1st ramadan , 2015");

// Question 10

var currentDate = new Date();
var startOf2015 = new Date(2015, 0, 1);
var Milliseconds = currentDate - startOf2015;
var Seconds = Math.floor(Milliseconds / 1000);

console.log("On reference to " + currentDate );
console.log( Milliseconds + " seconds have passed since since beginning of 2015");

// Question 11
var currentDate = new Date();
var oneHourAgo = new Date(currentDate);
oneHourAgo.setHours(currentDate.getHours() - 1);

console.log("current date " + currentDate);
console.log("one hour ago " + oneHourAgo); 

//Question 12

var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
console.log("current date " + currentDate);
console.log("100 years back, it was " + currentDate);

// Question 13

var age = prompt("Please enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
console.log("Your age is: " + age);
console.log("Your birth year is " + birthYear);


// Question 14
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[new Date().getMonth()];

var customerName = prompt("Enter your name:");
var numberOfUnits = prompt("Enter the number of units used:");
var chargesPerUnit = prompt("Enter the charges per unit:");
var latePayment = prompt("Enter the late payment surcharge:");

var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2); 
var grossAmount = (parseFloat(netAmount) + parseFloat(latePayment)).toFixed(2);

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of Units: " + numberOfUnits + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePayment + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");
