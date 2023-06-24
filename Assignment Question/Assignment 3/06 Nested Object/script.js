/** Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below. */


// function declaration
function personDetails(obj) {
    
    const {name, address: {street}} = obj; //extract name and street using destructing object

    return {name, street}; //return the name and street
}

// object is created using person details
const person = {
    name: "priyamanshu",
    age: 19,
    address: {
        street: "lakshmipur, bihariganj, madhepura",
        city: "madhepura",
        state: "bihar"
    },
};

// log it into console
const result = personDetails(person);
console.log(result);

/** OUTPUT - { name: 'priyamanshu', street: 'lakshmipur, bihariganj, madhepura' } */