// explore protypal inheritance, function constructors

//function constructors
function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

//prototype
Person.prototype.greet = function(){
	console.log('Hello ' + this.firstname + ' ' + this.lastname);	
};

var john = new Person('John','Doe');

console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);

// same protype object 
console.log(john.__proto__ === jane.__proto__);