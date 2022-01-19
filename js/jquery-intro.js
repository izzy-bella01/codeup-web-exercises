"use strict";

document.getElementById("heading"); //DOM


// jQuery

let myEl = $("#p-one")
console.log(myEl);

let heading = $("#heading");
console.log(heading);

// add a class of "border" to p tag

$("#p-one").addClass("border");

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
