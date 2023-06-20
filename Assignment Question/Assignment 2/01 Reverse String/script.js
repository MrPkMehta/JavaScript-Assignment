/* The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */


let input = "Hello I am Priyamanshu !"; //string stroed in input variable

// make a funcction to reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// reversed the string after 2 sec and then print.
setTimeout(() => {
    let reversedString = reverseString(input)
    console.log(reversedString);
}, 2000);



// OUTPUT - ! uhsnamayirP ma I olleH 
// After delay of two seconds