// Merge Sort
// Dec 24

function TopDownSplitMerge(arrayOfNumbers) {     
    var length = arrayOfNumbers.length
    // returns middle index of array, assumes parseInt(length/2, 10)
    var middleIndex = parseInt(length/2);

    // no need to sort, array of 1 is already sorted 
    if(length <= 1) {
        return arrayOfNumbers;
    }                       

    // this will keep splitting the array into left and right
    // recursively splits two halves until run size = 1
    // Split left side
    var left = TopDownSplitMerge(arrayOfNumbers.slice(0, middleIndex));  
    // Split right side
    var right = TopDownSplitMerge(arrayOfNumbers.slice(middleIndex, length));   

    /*

    E.g. 

    [1,2,3,4,5,6,7,8,9,10]
    
    L = [[1,2,3,4,5]]         R = [[6,7,8,9,10]]
    L = [[1,2],[6,7]]         R = [[3,4,5],[8,9,10]]
    L = [[1],[3],[8]]         R = [[2],[7],[4,5],[9,10]]
    L = [[1],[3],[8],[4],[9]] R = [[2],[7],[5],[10]]

    */

    // Merge every back together, calls function below
    return TopDownMerge(left, right);
};
 
function TopDownMerge(left, right) {
    var results = [], 
        leftLength = left.length, 
        rightLength = right.length
        
    for(var leftIndex = 0, rightIndex = 0; 
                leftIndex < leftLength || rightIndex < rightLength; ) {

        // If left/right is empty, then keep pushing the other side
        if(leftIndex < leftLength && rightIndex < rightLength) { 
            // compare, if left has smaller value, push to results 
            if(left[leftIndex] <= right[rightIndex]) {
               results.push(left[leftIndex]);
               leftIndex++; 
            // otherwise push right value to results
            } else {
               results.push(right[rightIndex]);
               rightIndex++;
            }
        // If there are only left values remaining, push into results array  
        } else if(leftIndex < leftLength) {
           results.push(left[leftIndex]);
           leftIndex++; 
        // if there are only right values remaining, push into results array
        } else {
           results.push(right[rightIndex]);
           rightIndex++;
        }
            
    }

    return results;
};

var sortedNumbers = TopDownSplitMerge([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]); // [1,2,3,4,5,6,7,8,9,10]