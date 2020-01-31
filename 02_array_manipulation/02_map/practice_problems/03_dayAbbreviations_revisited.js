/* ------------------------------------------------------------
Use the map method on the daysOfWeek array, creating a new 
array of abbreviated week days. Each abbreviated string 
should be the first three letters of the long version in 
daysOfWeek. Store the new array in the variable 
abbreviatedDays.

abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

Hint:
Recall the slice() method.
------------------------------------------------------------ */
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const convertDays = daysOfWeek.map((dayOfWeek) => {
  return dayOfWeek.slice(0,3)
})

console.log(convertDays)