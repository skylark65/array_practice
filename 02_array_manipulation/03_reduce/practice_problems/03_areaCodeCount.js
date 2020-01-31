/* ------------------------------------------------------------
Use reduce() to count the total number of phone numbers with 
a 503 area code.

Result should be: 3
------------------------------------------------------------ */
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];

let number503;
number503 = phoneNumbers.reduce((count, name) => {
  if(name.startsWith('(503)')) {
    return count + 1;
  }
   return count;
}, 0 );
console.log(number503);