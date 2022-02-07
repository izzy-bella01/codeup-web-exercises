"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Problem 1
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userLanguages = users.filter(user => user.languages.length >= 3);
console.log(userLanguages);

// Problem 2
// Use .map to create an array of strings where each element is a user's email address

let userEmails = users.map(user => user.email);
console.log(userEmails);

// Problem 3
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let userYearsTotal = users.reduce((previousValue, user) => {
    return previousValue + user.yearsOfExperience;
}, 0)
console.log(userYearsTotal);

let userYearsAvg = userYearsTotal / users.length;
console.log(userYearsAvg);

// Problem 4
// Use .reduce to get the longest email from the list of users

// It compares the length of a element with every other element and return it if its greater than every other element.
let longestEmail = userEmails.reduce((a, b) => {
    return a.length > b.length ? a : b;
})

// same as
    // let longestEmAil = userEmails.reduce((a, b) => {
    //     if( a.length > b.length) {
    //         return a;
    //     } else {
    //         return b;
    //     }
    // })
// & same as
    // let longestEmail = users.reduce((a, b) => {
    //     return a.email.length > b.email.length ? a.email : b;
    // })
console.log(longestEmail);


// Problem 5
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let userNamesString = users.reduce((previousValue, user) => {
//     return previousValue + user.name + ", "
// }, "Your instructors are: " )
// console.log(userNamesString);

let instructors = users.reduce((finalString, nextUser, index) => {
    if (index === users.length - 1) {
        return finalString + nextUser.name + "."
    } else {
        return finalString + nextUser.name + ", "
    }
}, "Your instructors are: ")
console.log(instructors);

// Bonus
// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce((langs, currentVal) => {
    currentVal.languages.forEach(language => {
        if(!langs.includes(language)) {
            langs.push(language)
        }
    })
    return langs;
}, [])
console.log(uniqueLanguages)