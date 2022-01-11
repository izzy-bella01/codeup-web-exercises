'use strict';
// BOM INTRO
// let sirius = {
//     numOfStudents: 30,
//     classroom: "Pedernales/mixed",
//     //methods - functions stored inside of an object
//     takeAttendance: function() {
//         prompt("how many students?");
//         return this.numOfStudents;
//     }
// }
//
// sirius.takeAttendance();
//
// let BOM = {
//     window: {
//         currentPage: "www.google.com",
//         prevPage: "www.facebook.com",
//     },
//
// }

// SYSTEM DIALOGUE


// var favoriteNumber = 18; //global scope
//
// function add(num1) {
//     var num2 = 10; // local scope
//     return num1 + num2;
// }
//
// console.log(add(favoriteNumber));
//
// let name = prompt("what is your name?")
// console.log("your name is: ", name);
//
// let numStudents = prompt("how many students are in your class?");
//
// function takeAttendance(students) {
//     return 30 - students;
// }
//  console.log("this many students are absent today: ", takeAttendance(numStudents));

//-- BOM METHODS --
// SET INTERVAL


// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0; // starting point
var max = 10; // max number we want to get to
var interval = 1000; // interval time in milliseconds

var intervalId =
    setInterval(
        function () {
            if (count >= max) {
                clearInterval(intervalId); // stop setInterval
                console.log('All done');
            } else {
                count++;
                console.log('Repeating this line ' + count);
            }
},
        interval);

// SET TIMEOUT

// var delay = 5000; // delay time in milliseconds
//
// var timeoutId = setTimeout(function () {
//     alert('Here is a delayed hello!');
// }, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

// WINDOW LOCATION
window.location //
// window.location = "https://java.codeup.com" //

var delay = 5000; // delay time in milliseconds

var delayedRedirect = setTimeout(function () {
    window.location = "https://java.codeup.com" //
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

