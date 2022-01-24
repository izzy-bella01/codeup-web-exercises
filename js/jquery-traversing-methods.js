

// $("#pink").next();

// next() // SETTER
// $("#pink").next().css("background-color", "pink");

// grab the element 'first'

// .CHILDREN()
// $("#first").children().children().css("border", "2px solid black");

// $("#first").children(":nth-child(1)").css("border", "2px solid black");

// .NEXT()
// $("#first").next().css("border", "2px solid black");

// .PARENT()
// $("#pink").parent().css("border", "2px solid black");


// .EACH()
// console.log($("li"));
//
// $("li").each(function(index) {
//     if(index % 2 === 0) {
//         $(this).css("font-size", "24px");
//     }
// });

// REDUCER

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//.first() 0 --> end of the array of elements(jQuery obj)
//.last() end --> 0

console.log($("li"));
$("li").first().css("background-color", "lightblue");
$("li").last().css("background-color", "lightgreen");
console.log($("li").last().parent());
