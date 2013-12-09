// Dec 8
// Create Like Function
// Called "Who likes it?"

// Implement a function likes(), which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes([]); // must return "no one likes this"
// likes(['Peter']); // must return "Peter likes this"
// likes(['Jacob', 'Alex']); // must return "Jacob and Alex like this"
// likes(['Max', 'John', 'Mark']); // must return "Max, John and Mark like this"
// likes(['Alex', 'Jacob', 'Mark', 'Max']); // must return "Alex, Jacob and 2 others like this"

//For more than 4 names, the number in and 2 others simply increases.

function likes(names) {
  if(names.length == 0 ) {
    return "no one likes this";
  } else {
    if(names.length == 1) {
      return names[0] + " likes this";
    } else {
      if(names.length == 2){
        return names[0] + " and " + names[1] + " like this";
      } else {
        if(names.length == 3){
          return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        } else {
          return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
        }
      }
    }
  }
};

likes(['Alex', 'Jacob', 'Mark', 'Max']); // "Alex, Jacob and 2 others like this"

// Highest rated solution

function likes(names) {
  // names[0] converted to boolean, if truthy, return names[0]. if falsy, return "no one"
  names[0] = names[0] || "no one";
  if (names.length > 3) names[2] = names.length-2 + " others";
  return names.slice(0,3).join(", ").replace(/(.*), /, "$1 and ") + " like" + (names.length<2 ? "s" : "") + " this";
}

// Another one

function likes(names) {
  var templates = ['no one likes', '0 likes', '0 and 1 like', '0, 1 and 2 like'];
  return (templates[names.length] || '0, 1 and # like').replace(/\d|#/g, function ($0) {
    return $0 === '#' ? names.length - 2 + ' others' : names[$0];
  }) + ' this';
}