/* ------------------------------------------------------------
Use the forEach() method to create a new array containing 
the capitalized version of these fruits.

Result Should be: ['Selma', 'Sam', 'Sharon'];

Hint: To get started, you need to define a new array 
to store the new strings:

let sNames = [];
------------------------------------------------------------ */
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

names.forEach(name =>{
  if(name.charAt(0) === 'S'){
    sNames.push(name);
  }
});

console.log(sNames);