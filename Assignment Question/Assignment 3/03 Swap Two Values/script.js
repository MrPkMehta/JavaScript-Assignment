/** You are working on a project that requires you to swap the values of two variables without using a temporary
variable. You decide to write a function that takes two variables as input and swaps their values using
destructuring assignment with an array. The function should take the two variables as arguments, destructure
them into an array, and then swap their positions within the array. Finally, the function should return an array
with the swapped values. For example, if the function is called with the arguments x = 5 and y = 10, it should
return an array [10, 5] with x now equal to 10 and y equal to 5. */


// Function Declaration
function swapValues(x, y){
    [x, y] = [y, x]; //destructing assignment
    return [x, y]; //return swap values
}

// varabials are declared in a and b
let a = 10;
let b = 30;

//log value before swap
console.log("Before swap: ",[a,b]);

//function calling
const swap = swapValues(a, b)
//log value after swap
console.log("After swap: ",swap);


/** OUTPUT - Before swap:  [ 10, 30 ]
After swap:  [ 30, 10 ] */