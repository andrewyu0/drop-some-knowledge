// associative array syntax 

var x = {a:0};
x.a // 0
x['a'] // 0 

var animals = {a: "kitten", b: "cow", c: "duck"};
animals.a; // "kitten"
animals['a'] // "kitten"



// In context of Runner...

var action = 'type', // could replace with 'click', etc 
    params1 = ['GO USA'];
    params2 = ['GO Canada'];

// action property exists on currentTest object (remember, can index into Object)
currentTest = currentTest[action].apply(currentTest, params1);
currentTest = currentTest[action].apply(currentTest, params2);

// .type is webdriver specific method 
current.type('GO USA').type.('GO Canada');

// Lines 1 - 6 is the same as 10, only we can dynamically do it, modify 'type'
// we can pass in different things for action and params 