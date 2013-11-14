// Nov 14
// Javascript filter - 3

/******* Filter 1 exercise, referenced to by Filter 3 kata

Log ins beginning with "_" are causing poblems. So, write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

E.g. input-array 

[["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]

Should output [["bar_", "bar@bar.com"]]

*/

// Solutions 

function searchNames(logins) {
  // Test provided by the callback function, implemented, tested on each of the elements of 'logins', and array created  
  // Takes in the boolean result of callback function 
  return logins.filter(function(pair) {
    // Only the emails that start with '_'
    // IMPT: return is asking for a boolean
    return pair[0].slice(-1) === '_';
  });
}



/*************Filter 3 exercise **************/

/* User array is a flat array of user-email-pairs, like so:
[ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]

Need a script that only returns email addresses only for users ending OR starting in a "."

Only need to return the email address

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself: */

function searchNames(logins) {
  var array = return logins.filter(function(element){
    return element.slice(-1) === '.' || element.slice(0) === '.'; 
  });

//This gives me an array of users that end or begin with ".". Now need to return an array with the emails that follow... 

// e.g.
// logins = [".bar", "bar@bar.com", "hello", "hello@hello.com", ".this", "this@this.com" ]
// I have  [".bar", ".this"]
// I need ["bar@bar.com", "this@this.com"]




