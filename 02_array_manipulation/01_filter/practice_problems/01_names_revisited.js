// ------------------------------------------------------------
// Using the filter() method on the names array, return an array 
// of only the names that start with "S".
// 
// Result Should be: ['Selma', 'Sam', 'Sharon'];
// ------------------------------------------------------------
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startsWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startsWithS);

console.log(sNames);