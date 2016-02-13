var firstname = 'Jane';

//example of scope
(function(lastname){
	// without var keyword, its affecting the global scope
	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);
}('Doe'));

//var firstname = 'Jane';
console.log(firstname);