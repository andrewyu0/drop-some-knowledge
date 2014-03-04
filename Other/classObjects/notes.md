// Nov 11
//See defining_objects_cheatsheet.js that Jason put together

// "JavaScript class-like objects"

// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in.

// The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'


//still having trouble 
//declaring objects
//functions within those objects
//using this + prototype 

var Animal = function(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype = {
  toString : function() {
    return this.name + ' is a ' + this.type;
  },
}


----
NOTES FROM JASON 
// Defining Objects 
//A group of data, not instatiating. prevent collision w name, group functionality together 
//instantiating = creating a new instance of the object 



// //Designing - factory pattern

// var Dog = function() {};
// var Owner = function() {}; 

// var DogFactory = { // 

//   create : function(breed, sitter){ //factory, defining new classes within this class 
//     var myDog = new Dog(breed);
//     sitter.dogs.push(myDog);
//     myDog.sitter = sitter; //this is more design 

//     return myDog; // use this for a lot of set up for multiple objects 
//   }

// };

----

// OBJECT LITERAL - use for singleton (single instances), or when you're passing in multiple options 
// You're not excecuting anything, its a bucket of data, not actually doing anything with. Just holding things. 

//object literal 
{}; 

var position = {
  // data 
  x : 1,
  y : 2,
  z : 3,

  outputPosition : function() {
    console.log(x+":"y+":"z);
  }
}; // this is a statement, executes.

position.outputPosition(); // "1:2:3"





setupDogSitter()




------------------------

//straignt up defining a function here 
//function declaration
function outputBreed(breed) {
  console.log(breed);
}

---------------------
//CONSTRUCTOR
// this is a good way to instatiating an object

var Dog = function(breed){
  this.breed = breed;

  this.fetch = function() {
    // this will create a function for every instance 
  };
}



Dog.prototype = {
  fetch : function() {
  }
};

Dog.prototype.fetch = function() {

}


// instatiating
var germanShep = new Dog('German Shepherd');
var golden = new Dog('German Shepherd');

