"use script";

// a js object, used as a placeholder, used often with requests

// function add(a, b) {
//     return a + b;
// }
//
// add(4,6); // trigger immediately once its called
//
// $.ajax("\"https://api.github.com/zen\"")
//     .done(function(res) {
//         console.log(res);
//     }) // waits for the response before it triggers executed

// similar to a conditional, in that a function will not run unless X condition(typically timely condition) is ready

// PROMISE STATES:
// PENDING - waiting for response / waiting for condition to be met
// RESOLVED - when condition waiting for is successfully met
// REJECTED - when event happens, but the condition is not met successfully, fails -- trigger the function that is going to handle the failed error

// FETCH REQUESTS

// comes from FETCH API - doesnt have to be embedded into our code in order to use

// GET Request using FETCH API

// // fetch()
// fetch("https://api.github.com/zen") // make the request // send into to make the request
// // how do we handle the response? json
// // console.log(res);
//
//     // .then() -- handle the response
//     // accepts two parameters
//     // 1 - callback function -> get executed only when the request comes back successfully --> state of the promise = resolved
//         // 1 -> always going to accept the successful response object from the request as a parameter
//     // 2 - callback function -> gets executed only if the request is made but fails --> state of promise = rejected
//         // 2 -> accepts error as a failed response
//     .then(
//         function (res) {
//         console.log(res);
//             console.log("successful!!");
//         },
//         function(err) {
//             console.log(err);
//             console.log("failed!!");
//         }
//     )


// arrow function in fetch request
// fetch("https://www.boredapi.com/activity")
//     .then(function(res) {
//         console.log(res);
//     })
//
// -------------------------- =>
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(
//         res => {
//         console.log(res);
//         console.log(res.body);
//         document.getElementById("floofer").setAttribute("src", res.message);
//         },
//         err => {
//             console.log(err);
//             console.log("failed");
//         }
//     )


// .catch() handles any rejected response
// accepts a callback function
// that callback function accepts the error message as a parameter

// chaining .then() together
// fetch("https://dog.ceo/api/breeds/image/random")
//     // ✅ successful response object becomes the parameter for the callback function in the .then() method
//     .then(response => response.json())
//     // .then() accepts another callback function, which accepts the returned item (the result) from the previous chain
//     .then(result => {
//         console.log(result);
//         document.getElementById("floofer").setAttribute("src", result.message); // add floofer picture from api to page
//     })
//     .catch(err => {
//         console.log("ERROR: ", err)
//     })


// CUSTOM PROMISES

//

const myPromise =
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNum = Math.random()
            if (randomNum > 0.5) {
                console.log("random number: ", randomNum);
                resolve();
            } else {
                console.log("rejected random number: ", randomNum);

                reject();
            }
        }, 1500);
    });

console.log(myPromise); // a pending promise

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));

