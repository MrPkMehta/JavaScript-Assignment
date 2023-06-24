/**You are building a program that takes an array of numbers as input and you need to extract the first, second,
and last elements of the array. You decide to write a function that can accomplish this task using destructuring
assignment with an array. The function should take the array as an argument, destructure it into three variables
representing the first, second, and last elements, and then return an array with these three values. For example,
if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5]. */

/**Destructing assignment Method */

//declaring a function to extract the 1st 2nd and last element of the array
function extractElement(arr){

    const [first, second, ...rest] = arr; //destructing assignmenet is used, unpack the value from the array
    const lastElement = arr.pop();//extract the last element

    return [first, second, lastElement];//return 1st 2nd and last element
}

let arr1 = [4, 5, 8, 9, 7, 2, 20, 8];
let extractedElement = extractElement(arr1); //calling a function
console.log(extractedElement); //log the array to the consol

/**OUTPUT - [ 4, 5, 8 ] */






/** ANOTHER METHOD WITHOUT DISTRUCTING  */
/** IN THIS THE ORDERED OF THE DECLEARED FUNCTION IS SAME AS IT DECLARED, IF ORDER IS CHANGE THEN OUTPUT IS WRONG */

function extractElement (array){

    const extract2ndElement = array[1];
    const extract1stElement = array.shift()
    const extractLastElement = array.pop()
    
    return  [extract1stElement, extract2ndElement, extractLastElement];
}

const array = [2, 5, 8, 6, 7, 8, 10];

console.log(extractElement(array));

/**OUTPUT- [ 2, 5, 10 ] */