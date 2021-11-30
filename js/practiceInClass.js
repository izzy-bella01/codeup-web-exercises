// let weather = "sunny";
//     if (weather === "sunny") {
//         //console.log("wear a shirt");
//     } else if (weather === "rainy") {
//         //console.log("bring an umbrella");
//     } else if (weather === "snowy") {
//         //console.log("wear 10 jackets");
//     } else {
//         //console.log("wear whatever");
//     }
//
// let myAge = 31;
// let actualAge = 21;
//
// function checkAge (givenAge, realAge) {
//     // console.log("givenAge: ", givenAge);
//     // console.log("myAge: ", myAge);
//     // console.log("realAge: ", realAge);
//     // console.log("actualAge: ", actualAge);
//     if (givenAge === realAge) {
//         //console.log("myAge is my actual age");
//     } else {
//         //console.log("that's cool");
//     }
// }
//
// checkAge(28, actualAge);

//Exercise: Create 5 different variables that holds 5 different number grades. (ex: let laurasGrade = 99)
//Write a function that accepts the five number grades grades, and returns each of their letter grades based on their number grades.
//Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -

// let laurasGrade = 99;
// let timothysGrade = 87;
// let bellasGrade = 74;
// let lindasGrade = 69;
// let tylersGrade = 44;
//
// function checkStudentGrades (studentsGrade) {
//     if (studentsGrade >= 90) {
//         console.log("Your grade is a A+! Great job!");
//     } else if (studentsGrade <= 89 && studentsGrade >= 80) {
//         console.log("Good work, you have a B.");
//     } else if (studentsGrade <= 79 && studentsGrade >= 70) {
//         console.log("Needs more practice, you have a C.");
//     } else if (studentsGrade <= 69 && studentsGrade >= 60) {
//         console.log("Stay for tutoring, you have a D.");
//     } else if (studentsGrade <= 59) {
//         console.log("You are failing, you have an F.");
//     } else {
//         console.log("enter grade");
//     }
// }
// checkStudentGrades(timothysGrade);

// (condition) {do this} else {do that}
// condition ? if true, do this : do that
// let weather2 = "rainy"
// weather2 === "sunny" ? console.log("matches") : console.log("not matches");

// let laurasGrade = 99;
// let timothysGrade = 87;
// let bellasGrade = 74;
// let lindasGrade = 69;
// let tylersGrade = 44;
//
// laurasGrade >= 90 ? console.log("Great job, you have an A+!") : console.log("You don't have an A+");
// timothysGrade >= 80 && timothysGrade <= 89 ? console.log("Good job, you have a B!") : console.log("You don't have a B.");
// bellasGrade >= 70 && bellasGrade <= 79 ? console.log("Needs more practice, you have a C.") : console.log("You dont have a C.");
// lindasGrade >= 60 && lindasGrade <= 69 ? console.log("May need a tutor, you have a D.") : console.log("You don't have a D.");
// tylersGrade <= 59 ? console.log("You are failing, you a F.") : console.log("You don't have an F.");

// let weather = "tornado";
//  switch(weather) {
//      case "sunny" :
//          console.log("sunglasses");
//      break;
//      case "rainy" :
//          console.log("umbrella");
//      break;
//      case "snowy" :
//          console.log("ten jackets");
//      break;
//      case "tornado" :
//          console.log("hide");
//  }

let bellasGrade = 94;

    switch(bellasGrade) {
        case bellasGrade >= 90 :
            console.log("You have an a A+!");
            break;
        case bellasGrade >= 80 && bellasGrade <= 89 :
            console.log("You have a B.");
            break;
        case bellasGrade >= 70 && bellasGrade <= 79 :
            console.log("You have a C.");
            break;
        case bellasGrade >= 60 && bellasGrade <= 69 :
            console.log("You have a D.");
            break;
        case bellasGrade <= 59 :
            console.log("You have an F.");
            break;
        default :
            console.log("Please enter student grade");
            break;
    } // not correct ^