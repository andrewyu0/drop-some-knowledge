// Nov 11 

// Syntax - [].reduce takes 4 arguments:
// previousValue, currentValue, index, array

[0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
  return previousValue + currentValue;
}, 10);

// Example: 
var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
// total == 6

//Question: In the example above, you don't see the 'index' or 'array' parameters defined. I guess this is more of a question on how to read this kind of documentation (e.g. when I want to learn about [].reduce)- when should I expect to see all parameters defined? When I look at the example, I get why you would only need a, b, but I'm also curious as to when I should expect to see other parameters, esp when they're defined in the syntax description. 