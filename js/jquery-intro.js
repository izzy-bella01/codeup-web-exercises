"use strict";

// document.getElementById("heading"); //DOM


// jQuery

// let myEl = $("#p-one")
// console.log(myEl);
//
// let heading = $("#heading");
// console.log(heading);

// add a class of "border" to p tag

// $("#p-one").addClass("border");

// add a border to the heading if the user is logged in:
// check value of isLoggedIn
// grab the value of isLoggedIn
// save that value to a variable
// compare value of logged in to true
// add a border
// assign a class to the element, if true
// find the element

// let user1 = {
//     name: "laura",
//     isLoggedIn: true,
//     age: 31
// }
//
// let loginStatus = user1.isLoggedIn;
//
// if(loginStatus === true) {
//     $("#heading").addClass("border") // $("#heading") -- > replaces document.getElementById
// }

// CHANGE ELEMENT WITH CLASS
// $(".blue-bg").css("background-color","blue");

// CHANGE ONLY LIST ITEMS
// $("li").css("font-size","24px");

// $("ul li:nth-child(3)").css("border","solid 2px purple");

// CHANGE TWO SEPARATE CSS PROPERTIES ON ONE ELEMENT

// $("#p-one").css("font-size", "20px").css("color", "pink");

// OR

// STYLE MULTIPLE ELEMENTS
// $("#p-one").css({"color":"pink", "font-size":"20px"});

// $("p, ul li").css("border", "solid 4px blue");

// STYLING *ALL* ELEMENTS

// $("*").css("background-color", "lightblue");
// $("body, html").css("background-color", "white");

// $("") --> select elements from the DOM
// # --> id
// . --> class
// element/tag --> element/tag
// , --> select multiple elements
// :nth-child(n) --> select child at the nth place from the parent/selected element
// .method().method().method() --> methods can be chained together
// .method(params) --> some methods accept oe or more parameters

// HOW IT WOULD BE USED IN DOM
// document.getElementById("heading").addEventListener("click",
//     function () {
//         console.log("clicked by jQuery");
//     });

// MOUSE EVENTS

$("#heading").click(function() {
    console.log("clicked by jQuery");
});

// when the FIRST paragraph is clicked on, create a border around the SECOND paragraph
// - call first paragraph element
// - create the click event
// - make the function to execute
// - call element that needs to be changed
// - actually make change

// $("#p-one").click(function() {
//     $("#p-two").css("border", "solid 5px brown")
// });

// create variables to make cleaner
// - p1
// - function
// - p2
// - css prop value
// - css prop & val
// -- all of it

// let p1 = $("#p-one");
// let p2 = $("#p-two");
// let cssVal = "solid 5px brown";
//
// let borderFunction = function() {
//     p2.css("border", cssVal);
// };
//
// p1.click(borderFunction);

// DOUBLE CLICK
// same as click, just twice

// - find element to work on
// - give button an id
// - put into variable
// - create function
// - select element to be changed
// - on dblclick, change bg color to dark
// - change font to light color

// let btn = $("button");
//
// btn.dblclick(function() {
//    $("*").css({"background-color":"darkblue", "color":"white"});
// });

// HOVER

// when hovering over li, change background color to lightblue and when hover off change background color to lightgreen
// - identify the element
// - hover event
// - function for hover on
// --> change bg color to lightblue
// - function for hover off
// --> change bg color to light green

// $("li").hover(
//     function() {
//         $(this).css("background-color", "lightblue");
//     },
//     function() {
//         $(this).css("background-color", "lightgreen");
//     }
// );

// OR

// let hoverOn = function() {
//     $(this).css("background-color", "lightblue");
// }
// let hoverOff = function() {
//     $(this).css("background-color", "lightgreen");
// }
//
// $("li").hover(hoverOn, hoverOff);


