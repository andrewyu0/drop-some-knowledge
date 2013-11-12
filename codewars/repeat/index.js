// Nov 8th or something

EXERCISE 1: "Dont make me repeat myself"
// Want to write program that will indent for you
// example 
//console.log('Root->');
// console.log(' '.repeat(4) + 'Sub-node');
// console.log(' '.repeat(4) + 'Sub-node->');
// console.log(' '.repeat(8) + 'Sub-sub-node');
// ...


// Top voted solution 

String.prototype.repeat = function(count) {
  return new Array(count + 1).join(this);
};