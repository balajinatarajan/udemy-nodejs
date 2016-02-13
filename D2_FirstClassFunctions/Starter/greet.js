var greet = function(){
	console.log('Hello from greet module!!');
}

// expose functions to outside world, otherwise 
// it will be encapsulated and will not be accessible to outside world 
// even if you add this file to the calling file using require
module.exports = greet;