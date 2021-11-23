
//Exercise 1

var a = 1;
var b = a++;
var c = ++a;
//console.log(a);

var d = "hello";
var e = false;

d++;
e++;
//console.log(e);

var perplexed;
//console.log(perplexed + 2);

var price = 2.7;
//console.log(price.toFixed(2));

var price = "2.7";
//console.log(price.toFixed(2));


//console.log(isNaN(false));

//console.log(!!"0");

//Exercise 2

var sample = "Hello Codeup";

//console.log(sample.length);
//console.log(sample.toUpperCase());

sample += " Students";

sample = sample.replace("Students", "Class");
//console.log(sample);

//console.log(sample.indexOf("c"));
//console.log(sample.indexOf("C"));

//console.log(sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1));

//Exercise 3
var cost = 3;
var Mermaid = 3 * cost;
var Bear = 5 * cost;
var Hercules = 1 * cost;

//console.log(Mermaid + Bear + Hercules);

var google = 400;
var amazon = 380;
var facebook = 350;

var gt = google * 6;
var at = amazon * 4;
var ft = facebook * 10;

//console.log(gt + at + ft);

var full = false;
var conflict = false;

var studentEnroll = !full && !conflict;

//console.log(studentEnroll);

var expired = false;
var twoItemsPlus = true;

var customer = !expired && !twoItemsPlus;
var preCustomer = expired;

//console.log(customer);

//Exercise 4

var passFivePlus = true;
var passNotUser = true;
var userNotTwenty = true;
var noWhitespace = true;

//console.log(passFivePlus && passNotUser && userNotTwenty && noWhitespace);


