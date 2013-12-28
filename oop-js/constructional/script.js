//create empty object
var newObject = {};
var newObject1 = Object.create(null);
var newObject2 = new Object();

//to assign key and values to object

// 1
//Set property
newObject.someKey = "Hello World";
//Get
var key = newObject.someKey;

//2
newObject1["someKey"] = "Hello World";
var key1 = newObject1["someKey"];

//3
Object.defineProperty(newObject2, "someKey", {
	value: "for more control of the property's behavior",
	writable: true,
	enumerable: true, 
	configurable: true
});

var defineProp = function(obj, key, value){
	config = {};
	config.value = value;
	Object.defineProperty(obj, key, config);
};

var person = Object.create(null);
defineProp(person, "car", "Honda");
defineProp(person, "dateOfBirth", "1984");
defineProp(person, "hasBeard", false);

//4
Object.defineProperties(newObject, {
	"someKey": {
		value: "Hello World",
		writable: false
	},
	"anotherKey": {
		value: "Foo bar",
		writable: false
	}
});

//Usage
var driver = Object.create(person);
defineProp(driver, "topSpeed","100mph");

console.log(driver.dateOfBirth);
console.log(driver.topSpeed);


//Constructor pattern
function Car(model, year, miles){
	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function(){
		return this.model + " has done " + this.miles + " miles";
	};
}

//Usage :
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());


//As above creates different version of toString(), there is better way to handle it.

//Constructor with prototypes

function CarOpt(model, year, miles){
	this.model = model;
	this.year = year;
	this.miles = miles;
}

//Note that we are using Object.prototype.newMethod rather than
//Object.prototype so as to avoid redefining the prototype object
CarOpt.prototype.toString = function(){
	return this.model + " has done " + this.miles + " miles";
}

//Usage

var civicopt = new CarOpt("Honda Civic", 2009, 20000);
var mondeoopt = new CarOpt("Ford Mondeo", 2009, 5000);

console.log(civicopt.toString());
console.log(mondeoopt.toString());