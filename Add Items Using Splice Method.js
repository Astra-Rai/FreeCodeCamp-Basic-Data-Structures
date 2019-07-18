/*
Instructions: 

We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

The splice() method adds/removes items to/from an array, 
and returns the removed item(s).

*/

function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  // change code above this line
  return arr;
} 
 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));