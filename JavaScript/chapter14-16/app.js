//Question1
var studentsLiteral = [];

//Question2
var studentObject = new Array ();

//Question3
var StringArray = ["kiwi","orange","banana"];

//Question4
var NumberArray = [1,2,3,4,5];

//Question5
var BooleanArray = [true, false];

//Question6
var MixedArray = ["kiwi", 17, true[1,2,3]];

//Question7
var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write( "<h1>These are the qualifications in Pakistan</h1>");
document.write(Qualification.join("<br>"));

//Question8
var studentName = ["Michael", "John", "Tony"];
var studentMarks = [320, 230, 480];

for (var i = 0; i < studentName.length; i++) {
    var percentage = (studentMarks[i] / 500) * 100;
    document.write("<h3>Score of " + studentName[i] + " is " + studentMarks[i] + ". Percentage: " + percentage.toFixed(2) + "%</h3>");
}

//Question9
var colors = ["Red", "Blue", "Green", "Pink", "Orange"];
document.write("<h3>Original Array: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorBeginning = prompt("What color would you like to add to the beginning of the array?");
colors.unshift(colorBeginning);
document.write("<h3>After adding color to the beginning: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var colorEnd = prompt("What color would you like to add to the end of the array?");
colors.push(colorEnd);
document.write("<h3>After adding color to the end: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.unshift("Purple", "Yellow");
document.write("<h3>After adding two more colors to the beginning: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.shift();
document.write("<h3>After removing the first color: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

colors.pop();
document.write("<h3>After removing the last color: </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToAdd = prompt("At which index would you like to add a color?");
var colorToAdd = prompt("What color would you like to add?");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<h3>After adding color at index " + indexToAdd + ": </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

var indexToDelete = prompt("At which index would you like to delete colors?");
var numberDelete = prompt("How many colors would you like to delete?");
colors.splice(indexToDelete, numberDelete);
document.write("<h3>After removing colors starting from index " + indexToDelete + ": </h3>");
document.write("<p>" + colors.join(", ") + "</p>");

//Question10
var studentScores = [320, 230, 480, 120, 500];

document.write("Score of student : " + studentScores.join(", ") + "<br>");

studentScores.sort(function(a, b) {
    return a - b; 
});

document.write("Ordered Scores of Student: " + studentScores.join(", "));

// Question11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<h3>Cities List: </h3>");
document.write("<p>" + cities.join(", ") + "</p>");

var selectedCities = cities.slice(2, 4);
document.write("<h3>Selected Cities: </h3>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

// Question12
var arr = ["This ", " is ", " my ", " cat"];

document.write("<h3>Original Array:</h3>");
document.write("<p>" + arr.join(", ") + "</p>");

var result = arr.join("");
document.write("<h3>Combined String:</h3>");
document.write("<p>" + result + "</p>");

//Question15
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Select Phone Manufacturer:</h3>");
document.write("<select>");

for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");