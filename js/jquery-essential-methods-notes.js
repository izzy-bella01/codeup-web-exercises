// give all paragraphs a border
// grab all p elements
// change css

// setting
$(".border").css("border", "solid 2px black");

// let borderCSS = $(".border").css();
// console.log(borderCSS);

// change h1 to say Happy Monday
// grab the element
// chain method to element
// pass in the value I want to change

// SETTERS
// .html() setting? getting? --> IT DOES BOTH!
console.log($("h1").html());// Hello World // GETTING

$("h1").html("Happy Monday!"); // SETTING

console.log($("h1").html());// Happy Monday! // GETTING

// add a class to h2
$("#red").addClass("border"); // SETTER
console.log($("#red"));

$("#red").removeClass("border"); // (re)SETTER
console.log($("#red"));


// .toggleClass()

// toggle h1 to be highlighted on an event
// grab element we want to change
// grab the element that's listening for the click
// // listen for the click
// change the css (.css())
// toggle it

$("h1").click(function() {
    $("h1").toggleClass("highlight");
});




