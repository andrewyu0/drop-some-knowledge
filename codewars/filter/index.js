// Nov 14
// Javascript filter - 3

/***************************** Filter 1 exercise, referenced to by Filter 3 kata

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



// Another solution using regex 

function searchNames( logins ){
  return logins.filter(function(v) {
    return /_$/.test(v[0]); // $ sign means end of string(/string$/), ^ means the beginning  
  });
}


/***********************************Filter 3 exercise **************/

/* User array is a flat array of user-email-pairs, like so:
[ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]

Need a script that only returns email addresses only for users ending OR starting in a "."

Only need to return the email address

You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself: */

function searchNames(logins) {
  return logins.filter(function(element,i,arr){
    // arr[i] === element
    // use filter optional params, (item, index, array), play with these 
    // if statement 
    // make sure index is greater than 0, first of all
    if (i > 0 && (arr[i - 1].slice(-1) === '.' || arr[i - 1].slice(0,1) === '.')){
      return true; 
    } 
    else {
      return false;
    }
  });
}
// Note, slice is tricky. 

// With Regex
function searchNames(logins) {
  return logins.filter(function(element,i,arr){
    if (i > 0 && (/\.$/.test(arr[i - 1]) || /^\./.test(arr[i - 1]))) { // special characters like period need to be 'escaped' using "\"" 
      return true; 
    } 
    else {
      return false;
    }
  });
}

// Highest rated answer

function searchNames( logins ){
  return logins.filter( function( value, index, a ){
    return ( ( index % 2 ) == 1 ) && a[index - 1].match( /(^\.|\.$)/ );
  } );
}
