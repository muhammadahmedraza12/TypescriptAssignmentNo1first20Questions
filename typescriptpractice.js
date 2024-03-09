var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question2
var personName = "Eric";
var message = "Hello ".concat(personName, ", would you like to learn some Python today?");
console.log(message);
//question3
var personName2 = "John Doe";
// Convert to lowercase
var lowercaseName = personName2.toLowerCase();
console.log("Lowercase:", lowercaseName);
// Convert to uppercase
var uppercaseName = personName2.toUpperCase();
console.log("Uppercase:", uppercaseName);
// Convert to title case
var titlecaseName = personName2.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
console.log("Titlecase:", titlecaseName);
//question4
var quote = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \"").concat(quote, "\""));
//question5
var famous_person = "Albert Einstein";
var quote2 = "A person who never made a mistake never tried anything new.";
var message2 = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
//question6
var personNameWithWhitespace = "\t\n   John Doe   \t\n";
// Print name with whitespace
console.log("Name with Whitespace:", personNameWithWhitespace);
// Strip whitespace and print the name
var strippedName = personNameWithWhitespace.trim();
console.log("Stripped Name:", strippedName);
//question7
// Addition
var additionResult = 5 + 3;
console.log("Addition:", additionResult);
// Subtraction
var subtractionResult = 10 - 2;
console.log("Subtraction:", subtractionResult);
// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication:", multiplicationResult);
// Division
var divisionResult = 16 / 2;
console.log("Division:", divisionResult);
//question8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//question9
var favoriteNumber = 42;
var favoriteNumberMessage = "My favorite number is ".concat(favoriteNumber, ".");
console.log(favoriteNumberMessage);
//question10
//first program which i had written above with comments
// Famous Quote Program
// Author: Ahmed
// Date: 17 Feb 2024
var famous_person2 = "Albert Einstein"; // Storing the name of the famous person
var quote3 = "A person who never made a mistake never tried anything new."; // Storing the famous quote
var message3 = "".concat(famous_person2, " once said, \"").concat(quote3, "\""); // message with the famous person's name and quote
console.log(message3); // Printing the message to the console
//second program which i had written above with comments
//  Author: Ahmed
// Date: 17 Feb 2024
// Addition operation to get the number 8
console.log(5 + 3);
// Subtraction operation to get the number 8
console.log(10 - 2);
// Multiplication operation to get the number 8
console.log(4 * 2);
// Division operation to get the number 8
console.log(16 / 2);
//question11
var names = ["Ahmed", "Aamir", "Wasiq", "Samad"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//question12
// Define an array called names
var names2 = ["Alice", "Bob", "Charlie", "David"];
// Print personalized greetings for each person
for (var i = 0; i < names2.length; i++) {
    console.log("Hello, ".concat(names2[i], "! Have a great day!"));
}
//question13
// Define an array called transportationModes
var transportationModes = ["bicycle", "car", "motorcycle", "electric scooter"];
// Print statements about each transportation mode
for (var i = 0; i < transportationModes.length; i++) {
    console.log("I would like to own a ".concat(transportationModes[i], "."));
}
//question14
// Define an array called guestList
var guestList = ["Samad", "Abdul Rehman", "Nimra"];
// Print an invitation message for each person on the guest array
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question15
// identifying the guest who cant' make it
var guestWhoCantMakeIt = "Abdul Rehman";
// the guest who can't make it
console.log("".concat(guestWhoCantMakeIt, " can't make it to the dinner."));
// Finding the location or index of the guest who can't make it in the original array
var indexOfGuestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
// Replacing the name of the guest who can't make it with the  new guest 
guestList[indexOfGuestWhoCantMakeIt] = "Laiba";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question16
// Informing people about bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Adding a new guest to the start of the array
guestList.unshift("Jabbar");
// Adding a new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Sumaiya");
// Using append() function for adding a new guest to the end of the array
guestList.push("Seerat");
// Print a new set of invitation messages for each person in your updated list
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
//question 17
// Informing that only two people can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Removing guests so that only two names should remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print an invitation message for the remaining two guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ",\nYou are still cordially invited to dinner. We would be honored to have your presence."));
    console.log("Best regards,\n[Ahmed Raza]");
    console.log("------------------------------");
}
// Remove the last two names from your list
guestList.splice(0, guestList.length);
// Printing an empty list
console.log("Updated guest list:", guestList);
//question 18
// five favorite places array
var placesToVisit = ["Switzerland", "Paris", "New York", "Brisbane", "Iceland"];
// Printing an array in it's original order
console.log("Original Order:", placesToVisit);
// Printing an array in alphabetical order by making the copy of array using spread operator and not modifying the actual array
var sortedArray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical Order:", sortedArray);
// printing an original array to show that it's order is still same
console.log("Original Order (unchanged):", placesToVisit);
// Printing an array in reverse alphabetical order by making the copy of array using spread operator and not modifying the actual array
var reverseSortedArray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseSortedArray);
// printing an original array to show that it's order is still same
console.log("Original Order (unchanged):", placesToVisit);
// Reversing the order of the array to show that now the original order has been reversed.
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reversing the order of the array again to show it's original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sorting and printing the original array in alphabetical order 
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// / Sorting and printing the original array in reverse alphabetical order 
placesToVisit.sort().reverse();
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
