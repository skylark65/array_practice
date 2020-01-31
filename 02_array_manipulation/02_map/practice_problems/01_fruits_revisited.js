/* ------------------------------------------------------------
Refactor the fruits exercise. To use the map() method instead
of the forEach() method.

const fruits = ['apple', 'pear', 'orange', 'cherry'];

let capitalizedFruits = [];
fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);
------------------------------------------------------------ */
const fruits = ['apple', 'pear', 'orange', 'cherry'];

const capitalizedFruits = fruits.map((fruit, index) => {
  console.log(index)
  return fruit.charAt(0).toUpperCase() + fruit.substring(1);
});

console.log(capitalizedFruits)

/*
let roots = numbers.map(function(num) {
  return Math.sqrt(num)
*/