"use strict"

let samsDogs = ["blue", "luna", "scamp"];
console.log("before: " , samsDogs);

//unshift() - adds to beginning of array
console.log("adds to beginning of array using unshift()");
samsDogs.unshift("spot");
console.log("after unshift: " , samsDogs);

//push() - adds to end of array
console.log("adding to end of array using push()");
samsDogs.push("rex", "max");
console.log("after push: " ,samsDogs);

//pop() - removes at end of array
console.log("removing last index using pop() method");
samsDogs.pop();
console.log("after pop", samsDogs);

//shift() - removes at beginning of array
console.log("running shift() method")
samsDogs.shift();
console.log("after shift", samsDogs);

//indexOf() - find number index of element
console.log("fetching index of \"luna\"");
console.log("luna's index: ", samsDogs.indexOf("luna"));

//slice() - slice portion of array and returns sliced portion (doesnt include last)
// let sliced = samsDogs.slice(1,3);
// console.log("sliced: ", sliced)

//reverse() - takes the array and reverses it
console.log("original: ", samsDogs);
console.log("reversing array");
samsDogs.reverse();
console.log("reversed: ", samsDogs)

//sort() - sort array in alphabetical order or numerical order (lowest to highest)
console.log("sorted dogs: ", samsDogs.sort());

let numArray = [5, 72, -5]
console.log(numArray.sort());

//join() - makes an array a string and joins together
console.log("samsDogs as a string: ", samsDogs.join());

//split() - splits a string into an array based on what is passed in separator
let searchTerm = "soup,tomato,no-garlic,1Hour"
let parsedSearchTerms = searchTerm.split(",")
console.log("Parsed Search Terms: ", parsedSearchTerms);

//example of method chaining
let myName = "Bella"
console.log("flipped name: ", myName.split("").reverse().join(""))

//spread operator - removes square brackets
console.log([...samsDogs, ...numArray]);

console.log([9.2, ...numArray]);
console.log([...numArray, 9.2]);
