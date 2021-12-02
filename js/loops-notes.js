//loops

// --WHILE--
// 50 parking spots
// 1 car driving around
// ? how man times to loop

// while(condition) {
//     //code at every iteration
// }

// while(car is unparked) {
//     keep driving
// }

// let parkingSpots = 20;
// let aisles = 10;
// let movingCars = 1;
// let isEmpty = false;

// while(isEmpty == false) { //THIS WILL BREAK AND RUN FOREVER
//     movingCars++
// }

// let i = 0;
// while(i < 10){
//     console.log("iteration: ", i);
//     i++;
// }

// let parkingSpots = 20;
// let usedSpots = 20;
//
// while(usedSpots > 0){
//     usedSpots--;
//     console.log(`There are ${20 - usedSpots} available.`);
// }

//while(conditon is true) {
//      execute code
// }

//loop until number is 15;

// let i = 0;
// while(i <= 15) {
//     console.log("loop number: ", i);
//     i++;
// }

// --DO WHILE--

// let i = 0;
// do {
//     console.log("i before i++: ", i);
//     i++;
//     console.log("i after i++: ", i);
// } while (i <= 15);

// loop through numbers 0 - 50 by 2s

// let i = 0;
// do {
//     i = i + 2;
//     console.log(i);
// } while (i < 50)




// After lunch practice
// let i = 0;
// let a = 0;
//
// while (i < 10) {
//     i++;
//     console.log(i);
// }
// console.log("------------");
// do {
//     a++;
//     console.log(a)
// } while (a < 10);

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

// let correctPass = "Bella";
// let input = prompt("what's the password?");
//
// while (input !== correctPass) {
//     alert("wrong password, try again");
//     input = prompt("enter password again");
// }
// alert("password accepted");

// --FOR--

// for(1; 2; 3;) {
//     //code;
// };
//
// 1. starting point;
// 2. stopping point; / condition
// 3. how to iterate;

// for(let i = 0; i <= 15; i += 3) {
//     console.log("my favorite number is: " + i);
// }


// 4 dozens
// let dozens = 0;
// for(let eggs = dozens; eggs <= 48; eggs++) {
//     dozens = eggs/12;
//     console.log("dozens: ", dozens);
//     console.log("eggs: ", eggs);
// }

// let dozens = 0;
// for(let eggs = 1; eggs <= 48; eggs++) {
//     if(eggs % 12 === 0) {
//         dozens++;
//     }
//
//     //dozens = eggs/12;
//     console.log("dozens: ", dozens);
//     console.log("eggs: ", eggs);
// }

// --NESTED--

//count 1 to 5
for(let counter = 1; counter <= 5; counter++) {
    console.log("---------"); // just for separation
    console.log("FIRST counter: " + counter);
    //counts from 5 to 1

    for(let counterTwo = 5; counterTwo > 0; counterTwo--) {
        console.log("SECOND counter: " + counterTwo);
    }
}
