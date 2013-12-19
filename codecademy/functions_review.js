

//************************************Intro to Functions 

var foodDemand = function (food) {
  console.log("I want to eat" + " " + food);
}

foodDemand("chicken");

//scope

var my_number = 8; //global scope

var timesTwo = function(number){
  var my_number = number * 2; //local scope
  return my_number;
}

timesTwo(7); // returns my_number as 14
console.log(my_number);// returns 8

//functions if/else

// Rocky Paper Scissors

var userChoice = prompt("Rock, Paper, or Scissors") //user inputs 
var computerChoice = Math.random(); // between 0 and 1
// Runs through each condition, making sure either RP or S is picked
if (computerChoice <= 0.33) {
  computerChoice = "Rock";
} else if (computerChoice <= 0.66) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}

var choice1 = userChoice;
var choice2 = computerChoice;

// Checking for a tie
var compare = function(choice1, choice2) {
  if (choice1 == choice2) {
    return "The result is a tie!";
  } else if (choice1 === "Rock") {
    if (choice2 === "Scissors") {
      return "Rock wins!";
    } else {
      return "Paper wins!"
    }

  }






}