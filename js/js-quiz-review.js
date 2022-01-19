//  JS REVIEW

// OBJECTS

    // DECLARING AN OBJECT
    // let USA = {
    //     Texas: {
    //         size: 'big',
    //         flower: 'bluebonnet',
    //         bird: 'mockingbird',
    //         people: 30,
    //         addPeople: function(newPeople) {
    //             return this.people + newPeople;
    //
    //         }
    //     }
    // }

    // NESTED OBJECTS, OBJECT METHODS, THIS KEYWORD

    // let sirius = {
    //     // properties
    //     numStudents: 29,
    //     city: [
    //         'Dallas',
    //         'Houston',
    //         ['Downtown', 'Rim', 'North Central', 'Museum District'],
    //         'San Antonio',
    //         {city: 'Austin1', numPeople: 40, lake: true, weird: true}
    //     ],
    //     cities: {
    //         Austin: {numPeople: 40, lake: true},
    //         SanAntonio: {
    //             numPeople: 30,
    //             city: 'Wincrest',
    //             lake: false,
    //             something: function() {
    //                 return this.city //
    //             }
    //         }
    //     },
    //     inPerson: false,
    //     theBest: true,
    //     Austin: {
    //         city: 'Austin2', numPeople: 40, lake: true, weird: true
    //     },
    //
    //     // methods - storage that store functions
    //     returnCity: function () {
    //         console.log(8 + 8);
    //         console.log('hello world');
    //         return this.city[4].city; // Austin1
    //     }
    // }

    // console.log(sirius.cities.SanAntonio.something());
    // console.log(sirius.city[4].weird);
    // console.log(sirius.city[2][2]);
    // console.log(sirius.city[sirius.city.length -1]); // item in city array
    // console.log(sirius.inPerson); // dot notation
    // console.log(sirius.returnCity()); // value of returnCity: function


//  ARRAYS

// let cities = [
//     {city: 'San Antonio', people: 30, isGreat: true, team:'spurs'},
//     {city: 'Dallas', people: 40, isGreat: true, team:'mavericks'},
//     {city: 'Houston', people: 50, isGreat: false, team:'rockets'},
//     {city: 'Austin', people: 30, isGreat: true, team:'keepItWeird'}
// ]

//  FOR-EACH
// cities.forEach(function(city){
//     console.log('is ' + city.city + ' great?: ' + city.isGreat);// concatenation
//     console.log(`is ${city.city} great?: ${city.isGreat}`); // template literal
// })

// let sports = ['spurs', 'mavericks', 'rockets', 'bucks'];
// sports.forEach(function(team){
//     console.log(`current team: ${team}`)
// })
//
// for(let i = 0; i <= sports.length - 1; i++) {
//     console.log('current team: ' + sports[i]);
// }

//  CONDITIONAL STATEMENTS
//  operators, if/else

// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// || or
// && and
// == checks value
// === checks value & type
// 2 === '2' // false
// 2 == '2' //  true

// let sports = ["spurs", "mavericks", "rockets", "bucks"];

// loop through array using forEach
// check something --> conditional statement (if/else)
// how to find the first letter of a string
// charAt()
// check if first letter of a team is 'r'

// sports.forEach(function(team) {
//     let firstLetter = team.charAt(0);
//     console.log(firstLetter);
//     if(firstLetter === "r") {
//         console.log("yes, the team name starts with the letter R");
//     } else {
//         console.log("nope, team doesn't start with the letter R");
//     }
// })
