/* The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number. */


function randomNumber() {
    return Math.floor( Math.random() * 30);
}


// random number executes after 3 seconds
let interval = setTimeout(() => {

    let randomNumberGeneration = randomNumber();
    console.log(`Random number generated is: ${randomNumberGeneration}`);

}, 3000);


// display   messege 
console.log("Wait for 3 sec...");

//stores the delayd]ed in the variable
let delaySecond = 3;

const delayedTime = setInterval(() => {
    console.log(`remaining second is ${delaySecond}`);

    delaySecond--;

    if(delaySecond === 1) {
        clearInterval(delayedTime);
    }
}, 1000);


/** OUTPUT - 
 * Wait for 3 sec...
remaining second is 3
remaining second is 2
Random number generated is: 5
 */