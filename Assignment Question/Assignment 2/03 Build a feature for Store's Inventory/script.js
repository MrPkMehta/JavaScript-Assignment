/**Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */


//assing a constant value to the exchangeRate
const exchangeRate = 80;  

// declearing the price of the item in doller
let priceInDoller = { apple: 2, tab: 5, tv: 7, iphone: 90, laptop: 10, mango: 30, mobile: 42, charger: 50};


// access the element from the entries and then converted it into indian rupees by multiplining it by 80.
let priceInRupees = Object.fromEntries(
    Object.entries(priceInDoller).map(([str, num]) => [str, num * exchangeRate])
);

// now print the price in rupees to the output.
console.log("Price In iNdian Rupees of an item👇");
console.log(priceInRupees);




/* OUTPUT -
 Price In iNdian Rupees of an item👇
{
  apple: 160,
  tab: 400,
  tv: 560,
  iphone: 7200,
  laptop: 800,
  mango: 2400,
  mobile: 3360,
  charger: 4000
} */