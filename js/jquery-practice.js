"use strict";

// mini - exercise:
// using jquery:
// 1. give all table cells a black border
$("th, td").css("border", "solid 2px black");

// 2. remove all bullet points from the unordered list items
$("ul li").css("list-style-type", "none");

// 3. change the font family of the entire page to luxurious roman
// ---> <link rel=“preconnect” href=“https://fonts.googleapis.com”>
//     <link rel=“preconnect” href=“https://fonts.gstatic.com” crossorigin>
//     <link href=“https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Questrial&display=swap” rel=“stylesheet”>
//     --->font-family: ‘Abril Fatface’, cursive;
// font-family: ‘Questrial’, sans-serif;
$("*").css("font-family","‘Abril Fatface’, cursive");

// 4. give each section a unique id
// 5. using the unique id’s give each section a different background color
$("#first").css("background-color", "lavender");

$("#second").css("background-color", "pink");

// 6. give 3 elements the same class name of “highlight”
// 7. give each of those 3 elements a bright yellow background
$(".highlight").css("background-color", "#fdfdaf");

// 8. BONUS: when you click on the image, make the image larger than what it currently is
setTimeout(function() {
    alert("Make floofers bigger by clicking them!:)");
}, 4500);

$("#floofers").click(
    function() {
        $(this).css({"width":"500px", "height":"auto"});
    }
);