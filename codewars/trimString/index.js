// Nov 21
// Trim a String

// Extend the String prototype by a trim function, that returns the string with leading or trailing whitespaces removed.

// Examples can be found in the test fixture.

// PS: Of course, the original trim function was removed before ;)

describe('trim the string', function() {
  // better message for string comparison
  var assertString = function(actual, expected, message) {
    var errorMessage = 'Tested ' + message + ', expected ' + JSON.stringify(expected) + ', but got ' + JSON.stringify(actual);
    Test.expect(expected === actual, errorMessage.replace(/ /g, '&nbsp;'));
  };

  it('should remove leading and trailing whitespaces', function() {
    assertString("foo      ".trim(), "foo", "trailing spaces");
    assertString("      foo".trim(), "foo", "leading spaces");
    assertString("      foo      ".trim(), "foo", "leading and trailing spaces");
    assertString("foo    bar".trim(), "foo    bar", "spaces in between");
    assertString("    ".trim(), "", "only spaces");
  });
});


//First Attempt 
// Didn't grab all the 

String.prototype.trim = function() {
  var string = "";
  for (var i = 0; i < this.length; i++) {
    if (!/[\s\t\n]/.test(this[i]) ||   there is a character before and after it ) {
      string = string + this[i];
    }
  }
  return string;
};
"       foo    ".trim(); // "foo" 

// Actual String.prototype.trim documentation

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };