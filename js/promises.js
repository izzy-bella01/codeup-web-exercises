"use strict";

function userDateCommit(owner, repo) {
     return fetch( `https://api.github.com/repos/${owner}/${repo}/commits`, {headers: {'Authorization': PROMISES_EXERCISE_TOKEN}})
         .then(response => response.json())
         // .then(result => console.log(result))
         .then(user => {
             console.log("Last commit made at: ", user[0].commit.author.date);
         })
         .catch(err => console.log("error: ", err))
}

console.log(userDateCommit("izzy-bella01", "codeup-web-exercises"));


//------------------------------
// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
// }
//
// // later on...
//
// getGithubUsernames().then( users => {
//     users.forEach( userObj => {
//         // do something with each username
//         console.log(userObj.login);
//     });
// }).catch(error => console.error(error));