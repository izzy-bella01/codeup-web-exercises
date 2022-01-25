"use strict";

// AJAX

// AJAX - Asynchronous Javascript and XML (and json) -->
// asynchronous - not at the same time --> thanksgiving cooking, start turkey, while turkey is cooking, you make other sides || yelling into a canon
// synchronous - at the same time --> dominoes falling || sirius cohort || event listener

// xml - eXtensible markup language
//designed to store and transport data

// js - the best

// Web Server - server that holds your website
// software:
// handle requests,
// sends data,
// understands URLs,
// allows us to interact with servers,
// host files (host - gives location to live),
// helps control the process of retrieving and sending info/data
// hardware: computers storing data

// HTTP Server - software that understands URLs and is able to communicate with the browser to view webpages

// JSON - JavaScript Object Notation
// {
//     "team": "spurs",
//     "wins": 2
// }

// API - Application Programming Interface

// ---------
// AJAX Request (jQuery syntax and library)
// get information from our random dog api


// $.ajax() // jQuery syntax for AJAX GET request

// console.log($.ajax("https://dog.ceo/api/breeds/image/random")); // GET

// console.log($.ajax("https://jsonplaceholder.typicode.com/posts", {
//     type: "POST",
//     // data we want to save to server
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     })
// }));
// console.log($.ajax("https://jsonplaceholder.typicode.com/posts"));

// REQUESTS:
    // GET --> receiving information from server
    // POST --> sending information to be stored on the server
    // DELETE --> send information about thing you want to delete
        // response is limited
    // PUT --> send the info about what your editing and you'll receive what was edited back


// DOCUMENTATION

    // GET:
    //     $.ajax("url",{
    //         type: "GET",
    //     });

        // OR (same ^)

        // $.ajax("url");

    // POST:
    //     $.ajax("url", {
    //         type:"POST",  // type of request
    //         data: {  // if POST, PUT, DELETE send info along with the request
    //             username: "izzybella",
    //             post: "i love puppies"
    //         }
    //     });


    // GET -- REQUEST
    //     $.ajax("https://dog.ceo/api/breeds/image/random").done(function(data, status) {
    //         console.log("request is DONE!");
    //         console.log("----DATA----");
    //         console.log(data);
    //         console.log("----STATUS----");
    //         console.log(status);
    //     });
    //
    //     $.ajax("https://dog.ceo/api/breeds/image/random").fail(function() {
    //         console.log("your request has failed");
    //     })

    // Request an image of a dog from DOG API and render dynamically on html
    // select element we want to change
    // change src attribute and give it a value
    // retrieve data from API
    // handle response
    // retrieve the actual item we need from the response // data.message
    // --> string
    // pass the string retrieved into the value of the src being changed


        // sends request
        //     $.ajax("https://dog.ceo/api/breeds/image/random")
        //         // handles response
        //         .done(function(data, status) {
        //             console.log(data);
        //             console.log(status);
        //             console.log(data.message);
        //             $("#doggo").attr("src", data.message);
        //         });


                // handles fail if applicable

            $.ajax("https://dog.ceo/api/breeds/image/random") // sends get request
                .fail(function() {
                    $("h2").html("sorry, no doggos:(");
                    // console.log("no doggos:("); // request failed
                })

                .always(function() {
                    $("h3").html("thanks for visiting!");
                })
                .done(function(data) {
                    $("h2").html("here's a doggo!:)");
                    $("#doggo").attr("src", data.message);
                });

            // .DONE --> TRIGGERS CALLBACK FUNCTION ONLY IF SUCCESSFUL
            // .FAIL --> TRIGGERS CALLBACK FUNCTION ONLY IF FAIL
            // .ALWAYS --> TRIGGERS CALLBACK FUNCTION ON SUCCESSFUL AND FAIL


        // post request
            $.ajax("https://dog.ceo/api/breeds/image/random", {
                type: "POST",
                data: {
                    message: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e"
                }
            })
            .done(function() {
                console.log("request successful");
            })
            .fail(function() {
                console.log("request failed");
            })
            .always(function() {
                console.log("request was made");
            });

        // get
        $.get("")
        $.ajax("url")

        // post
        $.post("")
        $.ajax("url", options)











