// Review up to this point 

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '')
}; 

numbersArray = [1,2,3,4,5];

function even(numbersArray) {
  return numbersArray.filter(function(n){
    return n % 2 == 0;
  })
}

console.log(even(numbersArray));

Array.prototype.sum = function() {
  return this.reduce(function(a,b){return a + b},0)
};

Array.prototype.reduse = function(callback, init){
  var x = init;
  for (var i < 0; i < this.length; i++){
    x = callback(x, this[i], i, array);
  }
  return x;
};

numbers = [1,5,4,2];

var forty = numbers.reduse(function(a,b){return a * b},1)

var position = {
  key: value,
  key: value,
}

Array.prototype.philter = function(callback) {
  newArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i)){
      newArray.push(this[i]);
    }
  }
}

function reverseWords(str) {
  return str.split(' ').map(function(x){
    return x.split('').reverse().join('');
  }).join(' ');
};

reverseWords("hello my name is andrew"); //"olleh ym eman si werdna"


function solution(f,s){
  return f.split(s).length - 1;
}

solution("there are a lot of re in this sentence. re", "re"); // 4 


















"Erika
 is awesome, ka
 w! ka
 w!"

"ka"

3






