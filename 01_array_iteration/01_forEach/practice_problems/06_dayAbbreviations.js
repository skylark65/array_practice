/* ------------------------------------------------------------
Using forEach, copy only the first 2 characters of each 
string in the days array and store the abbreviations in 
the dayAbbreviations array.

dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
------------------------------------------------------------ */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

days.forEach(day => {
  const dayAbbreviation = day.slice(0, 2);
  dayAbbreviations.push(dayAbbreviation);
});

console.log(dayAbbreviations);