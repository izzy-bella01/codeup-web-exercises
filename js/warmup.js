"use strict";

// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true

// let isAtBar = true;
// let bac = .07;
// let age = 21;
// let cashOnHand = 5.99;
//
//
// let canHaveADrink = (isAtBar || (bac < .08 && age >= 21 && cashOnHand >= 5.00)) // true && false && true && true --> false
//
// if (canHaveADrink) { // true or false
//     console.log("Have a brewski my dude!");
// } else { // it was not true
//     console.log("Sorry buddy, no brew for u");
// }

// function flyingDay(iscloudy, numPlanes) {
//
//     if (!iscloudy && numPlanes < 10) {
//         console.log("It is a good day to fly!");
//     } else {
//         console.log ("Sorry, no flying today.");
//     }
//
// }
//
// flyingDay(false, 9);


// Class Exercise

// write 4 functions which each take in two parameters and return a number.  They will, respectively:
    // Return the sum of two numbers
    // Return the difference of two numbers
    // Return the product of two numbers
    // Return the dividend of two numbers


// function addFun(firstNum, secondNum) {
//     return firstNum + secondNum;
// }
// console.log(addFun(10, 8));
//
// function subFun(firstNum, secondNum) {
//     return firstNum - secondNum;
// }
// console.log(subFun(20, 7));
//
// function proFun(firstNum, secondNum) {
//     return firstNum * secondNum;
// }
// console.log(proFun(25, 5));
//
// function divFun(firstNum, secondNum) {
//     return firstNum / secondNum;
// }
// console.log(divFun(50, 10));
//
// function remFun(firstNum, secondNum) {
//     return firstNum % secondNum;
// }
// console.log(remFun(45,7));

//Warm up for 11-29-2021
//
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
//console.log(reverseString("hello"));

//Warm up for 11-30-2021

//Write a function that accepts the top three bowling scores and returns the average.

// function bowlingScores(topOne, topTwo, topThree) {
//     return ((topOne + topTwo + topThree) / 3).toFixed();
// }
// bowlingScores();
// console.log(bowlingScores(172, 160, 158));

//Write a function that accepts the best score and returns true if its divisible by 3 or 5 and false if it’s not

// function bestScore(theTopScore) {
//     if (theTopScore % 3 === 0 || theTopScore % 5 === 0) {
//         return true;
//     } else {}
//     return false;
// }
// bestScore();
// console.log(bestScore(140));

//Write a function that accepts the name of the bowling place (“ThEbEsTbOwLiNgPlAcEever”) and returns it in all lower case BONUS: return it with a space between each word
// let bowlingName = "ThEbEsTbOwLiNgPlAcEever";
//
// function bowlingPlace (pinName) {
//     return (pinName.toLowerCase());
// }
//
// bowlingPlace(bowlingName);
// console.log(bowlingPlace(bowlingName));

//Given these variables: let score = 109; let name = “bowling Is Fun”; let isBowlingFun = true; let players = [“tom”, “jerry”, “Garfield”]; Write a function that returns the type of each of the variables (call the function once per variable);
//
// let score = 109;
// let name = "bowling Is Fun";
// let isBowlingFun = true;
// let players = ["tom", "jerry", "Garfield"];
//
// function whatIsTheType (varToBeTested) {
//     return typeof varToBeTested;
// }
//
// console.log(whatIsTheType(score));
// console.log(whatIsTheType(name));
// console.log(whatIsTheType(isBowlingFun));
// console.log(whatIsTheType(players));

//Write a function that executes all of the above functions


//Copy and execute the following functions, and find the Error: (Hint: try console logging the result)

// function myFunction (firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// myFunction();
// console.log(myFunction("Isabella", "Hernandez"))
//
// function thatsNotMyName (myName) {
//     if (myName === "laura") {
//         return "that's me! I'm " + myName;
//     } else {
//         return "that's not my name";
//     }
// }
// thatsNotMyName();
// console.log(thatsNotMyName("laura"));


// WARMUP FOR 01-14-2022

// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

var names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

var newNames = names.filter(name => name.length === 4)
console.log(newNames);