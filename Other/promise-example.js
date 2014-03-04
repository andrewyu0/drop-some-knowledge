// promise library 
var when = require('when');

var def = when.defer();

// This will resolve 5 seconds after we start
setTimeout(function(){
  def.resolve();
}, 5000);

// The function passed to .then will only run when def is resolved
var promise = def.promise;

promise.then(function(){
  console.log('This will print only when the deferred is resolved');
});
