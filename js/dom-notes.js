// CHANGE THE SPAN TO SAY THE USER INPUT NAME

var promptAnswer = prompt("what's your name?");


var retrievedSpan = document.getElementById("name");

console.log("promptAnswer: ", promptAnswer);
console.log("retrievedSpan: ", retrievedSpan);

retrievedSpan.innerHTML = promptAnswer;

// document --> the name of the DOM object
// METHODS THAT RETRIEVE OBJECTS FROM THE DOM
// getElementById("theIdName") -- by id --> WILL (AND SHOULD) ONLY RETURN ONE ELEMENT
// getElementsByClass("theClassName") -- by class --> COULD RETURN MANY ELEMENTS WITH THE SAME CLASS
// getElementByTagName("theTagName") -- by tag name --> COULD RETURN MANY ELEMENTS

