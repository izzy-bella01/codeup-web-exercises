console.log("---------------------------------");
console.log("RESTful API Requests");
console.log("---------------------------------");

// HEADERS:
// fetch("api/url", {
//     'Content-Type': "application/json"
// })

// METHOD TYPE:
// GET, POST, PUT, DELETE, PATCH
// GET - getting information (reading)
    // what's required when making a GET request?
        // - url
        // - api token (might be needed for all anyways)
        // - sometimes an id of something
    // WHAT WILL THE RESPONSE BE????
        // - response object => response.json()
        // {"id": 4, "username":"Bella}

// POST - adding information / pushing data into the API (writing)
    // access key(headers)
    // request body
        // data to be added
    // what's required when making a POST request?
        // - url
        // - what we're adding - JSON OBJECT
    // WHAT WILL THE RESPONSE BE????
        // - confirmation is not guaranteed
        // - response object --> res => res.json() --> res.status || res.ok
        // - err if err
            // how can we confirm if posted successfully
                // we can either make a second request after the post request made
                // - we can look into the data/api itself --> if you have access to it

// PUT - changes something that's already on the API (editing)
    // what should be sent with a PUT request?
        // - identify the data you're changing
        // - where does id go when making put request? --> at the end of the url
        // - what you're changing it to -- JSON OBJECT
        // - where do i add the object that im changing the specified thing to? -->
            // - in the options object, which is in the second parameter to my .fetch() method, inside of my 'body' property
    // WHAT WILL THE RESPONSE BE????
        // - dont get actual data back

// DELETE - delete a specific data from the API
    // what's required when making a DELETE request?
        // - id of the thing we're deleting
    // WHAT WILL THE RESPONSE BE????
        //?????
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// POST
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// url
// content being added - json
// token ???
// endpoint ???
// method type - specify that we're making a POST request

// const url = 'https://codeup-restful-example.glitch.me/reviews';
// const reqBody = {
//     "id": 248,
//     "restaurant_id": 1,
//     "name": "Bella",
//     "createdAt": 1504095567183,
//     "updatedAt": 1504095567183,
//     "rating": "5",
//     "comments": "BELLA WAS HERE"
// }
// const options  = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(reqBody)
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(jsonObj => console.log(jsonObj))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'Bella',
//         body: 'Was Here :)',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DELETE
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PUT
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let idOfThingChanging = 1;
let newObj = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
}
let options = {
    method: 'PUT',
    body: JSON.stringify(newObj),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}

fetch(`https://jsonplaceholder.typicode.com/posts/${idOfThingChanging}`, options)
    .then((response) => response.json())
    .then((json) => console.log(json));