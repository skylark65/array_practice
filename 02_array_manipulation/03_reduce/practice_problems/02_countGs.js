/* ------------------------------------------------------------
Use reduce() to add up the total number of names that start 
with the letter 'G'.

Result should be: 4
------------------------------------------------------------ */
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

const nameCount= names.reduce((count , name) => {
  if (name [0] === 'G'){
    return count + 1;
  }
    return count;
} , 0) 
console.log(nameCount);