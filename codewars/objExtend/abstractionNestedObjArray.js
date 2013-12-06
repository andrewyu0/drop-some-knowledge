// Dec 6
// Understanding nested objects, arrays, and Abstraction 

var obj = {
  a : [
    { d : 42 },
    43
  ],

  b : {
    sum : function(a,b) {
      return a + b;
    },
    e : 1
  },

  c : {
    f : [1,2,3,4,5]
  }
};


// (1) How do I get 85.... Go
obj.b.sum(obj.a[0].d, obj.a[1]); //85

    // Work in progress
    // First element:
    obj.a[0].d
    // Second element
    obj.a[1]


// (2) How do I get 10 using 3 different selectors (b -> e & c-> f)
obj.b.sum(obj.b.e, obj.b.sum(obj.c.f[3],obj.c.f[4])); //10

    // First element (1):
    obj.b.e // 1
    // Second Element (9):
    obj.b.sum(obj.c.f[3], obj.c.f[4])
      // work in progress
      // first element
      obj.c.f[3]
      //second element
      obj.c.f[4]


// Abstraction

// Key concept to understand: you will only use what's defined in the function (for the most part)

// write a multiply (mult) function to return the product of 2 numbers
// Write a single multiply (mult) function to get the following
// 1) product of obj.a.d and obj.c.f[1] = 84
  mult(obj.a.d, obj.c.f[1]);
// 2) product of obj.a.d and obj.c.f[2] = 126
  mult(obj.a.d, obj.c.f[2]);
// 3) product of obj.a.d and 4          = 168
  mult(obj.a.d, 4);

function mult(a,b) {
  return a * b;
}