// March 3
// Two Sum

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find indices of two different items in the array that, when added together, give the target value. The indices should then be returned in an array like so: [index1, index2].

function twoSum(numbers, target) {

  var answerArray = [];
  for(var i = 0; i < numbers.length; i++){

    x = target - numbers[i];
    
    if (numbers.indexOf(x) !== -1) {
      answerArray.push(i);      
      answerArray.push(numbers.indexOf(x)); 
      return answerArray     
    } 

  }

  // return answerArray;

};

// twoSum([1,2,3], 4) // [0, 2]
twoSum([1,20,3,4,5,6,500], 10) // [3, 5]


////////////

// other answers 
x
function twoSum(numbers, target) {
  for(var i=0; i<numbers.length; i++){
    for(var j=0; j<numbers.length; j++){
      if(i==j) continue;
      if(numbers[i] + numbers[j]==target) return[i, j];
    }
  }
}