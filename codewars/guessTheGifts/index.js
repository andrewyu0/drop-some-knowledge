// guessTheGifts
// Jan 20

// Example 

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]

// My Code
// Key here is nested for loops 

function guessGifts(wishlist, presents) {
  var returnArray = [];
  for(i = 0; i < presents.length; i++) {  
    for (j = 0; j < wishlist.length; j++) {
      if(presents[i].size == wishlist[j].size && 
      presents[i].clatters == wishlist[j].clatters && 
      presents[i].weight == wishlist[j].weight){
        // to resolve duplicates, checks to see if the element already exists in the array before pushing it
        if(returnArray.indexOf(wishlist[j].name) == -1) {
          returnArray.push(wishlist[j].name);
        }
      }
    } 
  }
  
  return returnArray;

};

// Top rated answer

function guessGifts(wishlist, presents) {
  return wishlist.filter(function(wishlistPresent){
    return presents.some(function(present){
      return present.clatters == wishlistPresent.clatters &&
        present.weight == wishlistPresent.weight &&
        present.size == wishlistPresent.size
    });
  }).map(function(e){
    return e.name;
  });
}