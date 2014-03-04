// arguments is an array
// arguments is a property on every javascript function

function a(x,y,z) {
  console.log(arguments); 
  console.log(x === arguments[0]);
  console.log(arguments[4]);
  console.log(arguments[7]());
}; 

a(1,2,3,'jason',4,5,'andrew',function(){x=5; return x;},{a:8});

// [1,2,3,'jason',4,5,'andrew',function(){x=5; return x;},{a:8}]
// true
// 4
// 5