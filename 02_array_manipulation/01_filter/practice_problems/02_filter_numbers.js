/* ------------------------------------------------------------
Using the filter method on the numbers array, return the
following 3 arrays:
1) ommit the number 3
2) return only the number 2
3) return only even numbers

Result Should be: ['Selma', 'Sam', 'Sharon'];

Hint:

You will need to invoke the remainder operator for number 3.
In other programing languages (including Python) this is 
known as modulo.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

6%2 evaluates to 0 because there's no remainder if 6 is divided 
by 2.

7%2 evaluates to 1 because there's a remainder of 1 when 7 is 
divided by 2.
------------------------------------------------------------ */
const numbers = [1,2,3,4,5,6,7,8,9,10];

const events = numbers.filter(number => number %2 === 0);

console.log(events)