// Nov 26
// Remove anchors from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples:

// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')


function removeUrlAnchors(url){
  return url.split('#')[0];
};

 removeUrlAnchor('www.codewars.com#about')

