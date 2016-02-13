// Your Javascript Code Goes Here
/* Commenting the below lines to run the module test
//function statement
function greet() {
	console.log('Hello!');
}

greet();

// functions are first-class
function logGreeting(fn) {
	fn();
}

// no paranthesis as it will call the function right there. we just want to pass it
logGreeting(greet);

// FUNCTION EXPRESSION
var greetMe = function() {
	console.log('Hello Bala!');
}

greetMe();

// it's first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function(){
	console.log('inline function here...');
});
*/

// USING A MODULE

// load the included module and RUN it, also assign it to a local variable so that the exports can be accessed here
var greet = require('./greet.js');

// below code will not work** as by standard module should encapulate its functions and 
//its existence should not affect the current code

//** it will work if module export that specific function

greet();