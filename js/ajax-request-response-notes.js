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

console.log($.ajax("https://dog.ceo/api/breeds/image/random"));