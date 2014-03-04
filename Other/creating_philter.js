// Nov 20 
// Defining 'Filter' method as 'philter', extending to Array


Array.prototype.philter = function(callback){
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      this.push(this[i]);
    }
  }
}

var userEmails = [ "foo", "foo@bar.com", "bar.", "bar@foo.com", ".foo", "food@bar.com" ];
var emails = [];

// Console returns 'unexpected token this'
// Trying to figure out how to call the array
userEmails.philter(function(userEmail, i, this) {
  if (i > 0 && (/\.$/.test(this[i - 1]) || /^\./.test(this[i - 1]))) {
    return true;
  }
  return userEmails;
}) 
// userEmails should equal ["bar@foo.com", "foo@bar.com"]