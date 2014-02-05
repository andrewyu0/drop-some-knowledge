// Quicksort is generally considered to be efficient and fast, is used by V8 as the implementation for Array.prototype.sort() (on arrays with more than 23 items)

// Pick an element, P (the pivot)
// Rearrange elements into 3 sub blocks
// 1. those <= P (left block S1)
// 2. P (only element in the middle block)
// 3. those >= P (right block S2)
// Repeat the process recursively for the left and right sub blocks

// Selecting pivot - you want middle array for best-case performance (array.length/2)

// swap function, this switches elements at different indices, using a temp variable

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;

}

/*
partition function

params 
- array to sort
- index where left pointer should start
- index where right pointer should start
*/

function partition(items, left, right) {
  // determines pivot 
  // round the number to to prevent floating point number
  var pivot = items[Math.floor((right + left) / 2)],
  i = left,
  j = right;

  console.log("this is the pivot: " + pivot);

    while (i <= j) {

      // execute these while loops first. Sets up the i and j that will be compared in the if block below

      // keep i++, stop when items[i] !< pivot. This is i
      while (items[i] < pivot) {
        i++;
        console.log("this is i " + i);
      }
      // keep j--, stop when items[j] !> pivot. This is j
      while (items[j] > pivot) {
        j--;
        console.log("this is j " + j);
      }

      // 
      if (i <= j) {
        
        // In the example: when 5 == 5, the last time in the while loop, it swaps itself (this is key - remember this!), then i++, j--, doesn't run the overall while loop anymore since i > j, then returns i below. 

        swap(items, i, j);
        // after the swap, both pointers shift one space
        // i++, j--, run the overall while loop again
        i++;
        console.log("this is i after swap" + i);
        j--;
        console.log("this is j after swap" + j);
        console.log("this is the array: " + items);
      } 

      // else break is pretty much implied here

    }

    // left pointer is returned as index, and will be used to determine where to partition next
    console.log("this is the array: " + items);
    return i; 

};

partition([1, 2, 3, 6, 5, 7, 8, 4, 9], 0, 8);

/*
params 
- array to sort
- index where left pointer should start
- index where right pointer should start
*/

function quickSort (items, left, right) {

  var index;

  // array of 1 is already ordered
  if (items.length > 1) {

    // filling default values for left and right if not supplied 
    // left = typeof left != "number" ? 0 : left;
    // right = typeof right != "number" ? items.length - 1 : right;

    // index = i after first partition
    index = partition(items, left, right);

    if (left < index - 1) {
      // partition the left side
      // left side = 0 to index 
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      // partition the right side
      quickSort(items, index, right);
    }
  }

  return items;

}

var items = [1, 2, 3, 6, 5, 7, 8, 4, 9, 12, 345, 2341, 64,12];
var result = quickSort(items, 0, items.length - 1);
console.log(result);