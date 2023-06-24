/** You are building a program that needs to find the maximum and minimum values in an array of numbers. You
decide to write a function that can accomplish this task by taking an array of numbers as input and using the
spread operator with the Math methods max() and min(). The function should return an object with two
properties, max, and min, representing the maximum and minimum values in the input array, respectively. For
example, if the input array is [5, 2, 7, 1, 9], the function should return an object { max: 9, min: 1 }. */


// Function Declaration
function minMax(array) { //take array as input
    
    const min = Math.min(...array); //iterate on each element and expand it and find the minimum value from the array
    
    const max = Math.max(...array); //find the maximum value from the array

    return {min, max};  //return the minimum and maximum value as object
}

// calling  a function
const array = [5, 6, 8, 10, 2, 85, 50, 60, 10]; 
const minimumAndMaximum = minMax(array)
console.log(minimumAndMaximum);

/** OUTPUT - { min: 2, max: 85 }*/






/**ALTERNATE METHOD */

function findMinMax(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr)
    };
  }
  
  // Calling function
  const arr = [5, 2, 7, 1, 9];
  const result = findMinMax(arr);
  console.log(result);

  /**OUTPUT-  { max: 9, min: 1 } */
  

