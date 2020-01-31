/* ------------------------------------------------------------
Using forEach, turn the number strings from the stringPrices 
array into floats and add them all, storing the total in the 
variable priceTotal.

priceTotal should be: 32.92

Hint:

Use the parseFloat() method.
------------------------------------------------------------ */
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];

let priceTotal = 0;

stringPrices.forEach(stringPrice => priceTotal += 
  parseFloat(stringPrice));

console.log(priceTotal);