(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Isabella",
        lastName: "Hernandez",
        // sayHello: function() { // this works too!! :)
        //     return "Hello from " + this.firstName + " " + this.lastName + "!"
        // }
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!"
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

//THOUGHT PROCESS COMMENTED OUT BELOW
    // function shoppersTotal (name, amount) {
    //     if (amount < 200) {
    //         console.log("name :" + name + " , amount before discount : " + amount + " , discount: 0%" + " , total after: " + amount);
    //     } else {
    //         console.log("name :" + name + " , amount before discount : " + amount + " , discount: 12%" + " , total after: " + amount - (amount * .12));
    //     }
    // }
    //
    // let heb = []
    //
    // heb.forEach(function (shoppersTotal) {
    //     console.log(shoppersTotal)
    // })
    //
    // console.log(shoppersTotal());
//END OF THOUGHT PROCESS

    shoppers.forEach( function(shopper) {
        console.log(shopper);
        var discountTotal = shopper.amount - (shopper.amount * .12);
        if (shopper.amount < 200) {
            console.log("name: " + shopper.name + " , amount before discount: " + shopper.amount + " , discount: 0%" + " , total after: " + shopper.amount);
        } else {
            console.log("name: " + shopper.name + " , amount before discount: " + shopper.amount + " , discount: 12%" + " , total  after: " + discountTotal);
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Fault in Our Stars",
            author: {
                firstName: "John",
                lastName: "Green"
            }
        },
        {
            title:"The Great Gatsby",
            author: {
                firstName: "F Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title:"Wonder",
            author: {
                firstName: "R.J.",
                lastName: "Palacio"
            }
        },
        {
            title:"Five Feet Apart",
            author: {
                firstName: "Rachael",
                lastName: "Lippincott"
            }
        },
        {
            title:"Of Mice and Men",
            author: {
                firstName: "John",
                lastName: "Steinbeck"
            }
        }
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book,index) {
        console.log(`Book # ${index + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}\n---`)
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, authorFirstName, authorLastName) {
        return {
           title: bookTitle,
            author: {
               firstName: authorFirstName,
               lastName: authorLastName
            },
            showBookInfo : function () {
                console.log(`Title: ${this.title}\nAuthor: ${this.author.firstName} ${this.author.lastName}\n---`)
            }
        }
    }

    const newBook = createBook("Twilight", "Stephanie", "Meyer");
    console.log(newBook.showBookInfo());

})();