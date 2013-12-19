/*************While Loops***********/ 


 while(condition){
    // Do something!
}


var bool = true;

while(bool){
  console.log("I'm learning");
  bool = false; // while loop no longer true
}

var variable = 0;

var loop = function(){
  while(variable < 4){
    console.log("Print print");
    variable++
  }
}

loop(); 

//do while loop, makes sure the loop runs at least one time no matter what 
// do this thing one time, then check the condition to see if we should keep looping

var choppa = function(){
  var condition = false; 
    do {
      console.log("I'll be back"); // runs it once 
    }
  while(condition); // no while loop since condition is false
}

// Review of all 

for (i = 0; i < 10; i++) {
    console.log("this");
}

condition = true;
while (condition) {
    console.log("this while");
    condition = false;
}

var condition = false;
do {
    console.log("this do");
} while (condition);