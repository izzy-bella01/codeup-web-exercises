//Creating an object

// let person = {};
// // or
// let person = new Object();

// let array = [1, 2, 3, true, false];
//
let birthdayObject = {
    month: "November",
    day: 22,
    getDetails: function (){
        return this.month + "," + this.day
    }
}
//
// let person = {
//     name: "Jack",
//     isTall: false
// };

// const newPropertyName = "name"
//
// person[newPropertyName] = "Matt Lewis";
// person.birthday = "Sept. 22";
// person.isTall = true;


// console.log(person);

let dog = {
    breed: "Husky",
    colors: ["brown", "black", "white"],
    sex: "Female",
    name: "Luna",
    isFloofer: true,
    bark: function(loud) {
        if (loud) {
            console.log("woof, woof!");
        } else {
            console.log("ruff, ruff!");
        }
    },
    getDetails: function() {
        return this.colors[0] + " " + this.breed + " named " + this.name;
    }
};


function createDog(name, colors, breed) {
    return {
        breed: breed,
        colors: colors,
        sex: "f",
        name: name,
        isFloofer: true,
        bark: function (loud) {
            if (loud) {
                console.log("Woof Woof!!");
            } else {
                console.log("ruf ruf");
            }
        },
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
}

let collectionOfDogs = [];

collectionOfDogs.push(createDog("Roxy", ["brown","black"], "German Shepard"));
collectionOfDogs.push(createDog("Bella", ["brown", "black"], "Rottweiler"));
collectionOfDogs.push(createDog('Oreo', ['black' , 'white'], "Great Pyrenees"));

collectionOfDogs.forEach(function (dog) {
    console.log(dog.getDetails())
})

console.log(dog);
console.log(createDog("Roxy", ["brown","black"], "German Shepard"));