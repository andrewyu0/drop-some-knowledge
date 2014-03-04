// March 3

// In this kata your task is to create bit calculator. Function arguments are two bit representation of numbers ("101","1","10"...), and you must return their sum in decimal representation.

// Test.expect(calculate("10","10") == 4);
// Test.expect(calculate("10","0") == 2);
// Test.expect(calculate("101","10") == 7);
// parseInt and some Math functions are disabled.

// Those Math functions are enabled: pow,round,random

function calculate(num1, num2){

  var num1Sum = 0;
  var count = 1;

  for(var i = 0; i < num1.length; i++){

    if(num1[i] === '1') {
      var exp = num1.length - count;
      var convert = Math.pow(2, exp);
      var num1Sum = num1Sum + convert;
    }
    // count has to be out here so that it increments even when num1[i] === '0'
    count++;

  }

  // For the second param
  var num2Sum = 0;
  var count2 = 1;

  for(var i = 0; i < num2.length; i++){

    if(num2[i] === '1') {
      var exp = num2.length - count2;
      var convert = Math.pow(2, exp);
      var num2Sum = num2Sum + convert;
    }
    count2++;

  }

  return num1Sum + num2Sum;
  // then sum the two 

};

calculate("10", "10");

Test.expect(calculate("10","10") == 4);
Test.expect(calculate("10","0") == 2);
Test.expect(calculate("101","10") == 7); // 5,2
Test.expect(calculate("11000","10") == 26); // 24, 2

