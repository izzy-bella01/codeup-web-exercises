var userNumber = 0;
do {
    userNumber = Number(prompt('Give me an odd number between 1 and 50'));
    if(userNumber < 1 || userNumber > 50) {
        alert('Invalid input. Please try again');
    } else if (userNumber % 2 === 0) {
        alert('Not an odd number');
    } else if (isNaN(userNumber)) {
        alert('That is not a number');
    } else {
        alert('Yay, valid number');
        break;
    }
} while(true)

console.log("Number to skip: " + userNumber)

for(var i = 1; i <= 50; i += 2) {
    if(i === userNumber) {
        console.log("Yikes, skipping number: " + userNumber)
        continue;
    }
    console.log("Here is an odd number: " + i);
}

