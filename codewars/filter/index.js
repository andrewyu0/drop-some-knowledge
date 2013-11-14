// Nov 14

/* Filter 1, referenced to by Filter 3 kata

Log ins beginning with "_" are causing poblems. So, write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

E.g. input-array [["foo", "foo@foo.com"], "bar_", "bar@bar.com"]]
Should output [["bar_", "bar@bar.com"]]

*/

// Solutions 

function searchNames(logins) {
  // Test provided by the callback function, implemented, tested on each of the elements of 'logins', and array created  
  return logins.filter(function(pair) {
    // Only the emails that start with '_'
    return pair[0].slice(-1) === '_';
  });
}

