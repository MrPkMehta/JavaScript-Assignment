/**You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements. */


// function to remove duplicate numbers
function removeDuplicate(numbers) {
    return new Set(numbers)//set function does not allow repetation of the number
}

const number = [1,2,3,4,5,6,7,8,1,5,4,6,3,7,5,1,3,6,5,4,6,1,2]//take array as input

const uniqueNumbers = removeDuplicate(number) //calling a function

console.log(uniqueNumbers); 


/**OUTPUT- Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 } */