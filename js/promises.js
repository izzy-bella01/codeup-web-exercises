"use strict";


//-------------PROBLEM ONE-----------------
function userDateCommit(owner, repo) {
     return fetch( `https://api.github.com/repos/${owner}/${repo}/commits`, {headers: {'Authorization': PROMISES_EXERCISE_TOKEN}})
         .then(response => response.json())
         .then(user => {
             console.log("Last commit made at: ", user[0].commit.author.date);
         })
         .catch(err => console.log("error: ", err))
}

console.log(userDateCommit("izzy-bella01", "codeup-web-exercises"));

//-------------PROBLEM TWO-----------------

// ORIGINAL FUNCTION

// function wait(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Successful");
//             reject("Failed");
//         }, number);
//     });
// }

// SIMPLIFIED VERSION

let wait = (number) => {
    return new Promise(resolve => setTimeout(resolve, number))
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));