"use strict";

document.getElementById("heading"); //DOM


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

let user1 = {
    name: "laura",
    isLoggedIn: true,
    age: 31
}

let loginStatus = user1.isLoggedIn;

if(loginStatus === true) {
    $("#heading").addClass("border") // $("#heading") -- > replaces document.getElementById
}

// CHANGE ELEMENT WITH CLASS
$(".blue-bg").css("background-color","blue");

// CHANGE ONLY LIST ITEMS
$("li").css("font-size","24px");

// $("ul li:nth-child(3)").css("border","solid 2px purple");

// CHANGE TWO SEPARATE CSS PROPERTIES ON ONE ELEMENT

// $("#p-one").css("font-size", "20px").css("color", "pink");

// OR

// STYLE MULTIPLE ELEMENTS
// $("#p-one").css({"color":"pink", "font-size":"20px"});

$("p, ul li").css("border", "solid 4px blue");

// STYLING *ALL* ELEMENTS

$("*").css("background-color", "lightblue");
$("body, html").css("background-color", "white");

// $("") --> select elements from the DOM
// # --> id
// . --> class
// element/tag --> element/tag
// , --> select multiple elements
// :nth-child(n) --> select child at the nth place from the parent/selected element
// .method().method().method() --> methods can be chained together
// .method(params) --> some methods accept oe or more parameters