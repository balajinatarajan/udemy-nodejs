// explore JS Objects

var person = {
	firstname: 'John',
	lastname: 'Dough',
	greet: function(){
		console.log('Hello ' + this.firstname + ' ' + this.lastname);
	}	
};

person.greet();

// access value by name (or key)
console.log(person['firstname']);