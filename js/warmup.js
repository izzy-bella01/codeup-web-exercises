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

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));