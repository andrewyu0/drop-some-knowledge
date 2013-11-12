// Factory Design Pattern
var Dog   = function() {};
var Owner = function() {};

var DogFactory = {
  create : function(breed, sitter) {
    var myDog = new Dog(breed);
    sitter.dogs.push(myDog);
    myDog.stter = sitter;

    return myDog;
  }
};

// Object Literal
{};

var position = {
  // Data
  // Assignments will be with ':' and separated with ','
  x : 1,
  y : 2,
  z : 3,

  outputPosition : function() {
    console.log(x+":"y+":"+z);
  }
};

position.x;
position.y;
console.log(position.z); // 3

position.outputPosition(); // 1:2:3

// Using an Object Literal for options
setupDogSitter('Susie', {
  name : 'Balla'
});

function setupDogSitter(name, options) {
  options.name;
}

// Function declaration
function outputBreed(breed) {
  console.log(breed);
}

// Object 'class' declaration
var Dog  = function(breed) {
  // Within exectuable code
  // Assignments will be with '=' and separated with ';'
  this.breed = breed;

  // Generally you don't want to do this
  this.fetch = function() {

  };
};

// 2 ways to create the fetch function on an Object 'class'
// This will SET the prototype
Dog.prototype.jump = function(){}; // Jump Exists
Dog.prototype = {
  fetch : function() {

  },
  aJump : function() {

  }
};
// Catch doesn't exist

Dog.prototype.catch = function() {

};

// Jump doesn't exist
// aJump will exist
// fetch will exist
// Catch will exist because its defined after we set the prototype
// After Setting the prototype 'jump' will no longer exist

// This will ADD fetch to the prototyp
Dog.prototype.fetch = function() {

};

Dog.prototype.jump = function() {

};

// Instanciating 2 different Dogs
var germanShep  = new Dog('German Shperd');
germanShep.fetch();

var golden      = new Dog('Golden Retreiver');


// How I usually define Dog
var Dog = function(breed) {
  this.breed = breed;
  this.name  = "";
}

Dog.prototype = {
  // Dog will fetch
  fetch : function() {

  },
  // Dog will jump
  jump : function() {

  },
  // Dog will catch
  catch : function() {

  },
  // Dog will bark
  bark : function() {
    console.log('Bark ' + this.name);
  },
  // Sets the dog's name
  setName : function(name) {
    this.name = name;
  }
};

var sparky = new Dog('Golden Retriever');
sparky.setName('Sparky');

sparky.bark(); // I expect: 'Bark Sparky'

sparky.setName('Bob');
sparky.bark(); // I expect: 'Bark Bob'