'use strict';

// // REGISTER EVENT LISTENER
//
// // create a handler function
// var listener = function (event) {
//     alert('You clicked the button!');
// }
//
// // register the listener to handle clicks on btn1
// document.getElementById('btn1').addEventListener('click', listener);
//
//
// // REMOVE EVENT LISTENER
//
// // var listener = function (event) {
// //     alert('You clicked the button!');
// // }
//
// // add event listener to btn2
// var btn2 = document.getElementById('btn2');
// btn2.addEventListener('click', listener);
//
// var remover = function (event) {
//     // remove event listener from btn1
//     btn2.removeEventListener('click', listener);
//     console.log('Event listener removed.');
// }
//
// // add event listener to btn3
// var btn3 = document.getElementById('btn3');
// btn3.addEventListener('click', remover);

// NOTES IN CLASS

// // CHANGE TABLE OF CONTENTS TO ORANGE
var el = document.getElementById("orange");
// el.style.color = "orange";

var listener = function () {
    el.style.backgroundColor = "orange";
}
el.addEventListener("click", listener);


// EVENT LISTENER USING BTN (CHANGE "HELLO WORLD" TO PINK WHEN CLICK ON BUTTON)

// define hello world element
// define button that will be listening for the click
// add the event listener to the button (.addEventListener())
// define what event is being listened for
// change color of hello world (style.color = "pink")

var helloWorldEl = document.getElementsByTagName("h1")[0];
console.log(helloWorldEl[0]);

var btn = document.getElementById("btn");
console.log(btn);

var changePink = function () {
    helloWorldEl.style.color = "pink";
}

btn.addEventListener("click", changePink);

// DARK MODE

document.getElementById("dark-mode").addEventListener("click", function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
})


// REMOVE EVENT LISTENER

var h2 = document.getElementById("change-me");

var changeTextSize = function() {
    h2.style.color = "red";
}

h2.addEventListener("mouseover", changeTextSize);

// h2.removeEventListener("mouseover", changeTextSize);