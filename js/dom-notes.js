// CHANGE THE SPAN TO SAY THE USER INPUT NAME

var promptAnswer = prompt("what's your name?");


var retrievedSpan = document.getElementById("name");

console.log("promptAnswer: ", promptAnswer);

retrievedSpan.innerHTML = promptAnswer;

console.log("retrievedSpan: ", retrievedSpan);


// document --> the name of the DOM object
// METHODS THAT RETRIEVE OBJECTS FROM THE DOM
// getElementById("theIdName") -- by id --> WILL (AND SHOULD) ONLY RETURN ONE ELEMENT
// getElementsByClass("theClassName") -- by class --> COULD RETURN MANY ELEMENTS WITH THE SAME CLASS
// getElementByTagName("theTagName") -- by tag name --> COULD RETURN MANY ELEMENTS

// var weatherAnswer = prompt("what is the weather like today?");
//
// var retrievedWeather = document.getElementById("weather");
//
// console.log("weatherAnswer: ", weatherAnswer);
//
// retrievedWeather.innerHTML = "The weather outside today is " + weatherAnswer;
//
// console.log("retrievedWeather: ", retrievedWeather);

// RETRIEVING MULTIPLE ELEMENTS
var myElements = document.getElementsByClassName("odd");
console.log(myElements); // RETURNS AN ARRAY


// LOOP THROUGH AN ARRAY TO CHANGE EACH ELEMENT RETURNED
for(var i = 0; i < myElements.length; i++) {
    myElements[i].innerHTML = "Hello World"
}

// RETRIEVING FORM INPUT ELEMENTS
var userInput = document.forms.login.username;
var inputVal = userInput.value;
console.log(inputVal);

// CHANGE COLOR OF H1 TAG TO PURPLE
var myH1 = document.getElementById("greeting");
myH1.setAttribute("style", "color: purple");

myH1.setAttribute("class", "border")
console.log(myH1);

myH1.style.color = "red"; // another way to do this