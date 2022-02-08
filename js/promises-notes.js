"use script";

// a js object, used as a placeholder, used often with requests

function add(a, b) {
    return a + b;
}

add(4,6); // trigger immediately once its called

$.ajax("\"https://api.github.com/zen\"")
    .done(function(res) {
        console.log(res);
    }) // waits for the response before it triggers executed

