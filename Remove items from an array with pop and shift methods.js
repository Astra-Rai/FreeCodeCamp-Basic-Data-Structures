/*
Instructions:
We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

-popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
-The popShift function should utilize the pop() method
-The popShift function should utilize the shift() method


Code we start with:

function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

Exercise soltion below:
*/

//function popShift has one parameter

function popShift(arr) {

//store last element of arr in variable popped, used the pop() method
//The pop() method removes the last element of an array, and returns that element.
  let popped = arr.pop();

//The shift() method removes the first item of an array.
// The return value of the shift method is the removed item.   

  let shifted = arr.shift(); // change this line

//return an array
//return content of variable shifted as first element of the array, the string "challenge"
//return content of variable popped as second element of the arry, the string "complete"  
  
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']))


//var output = popShift(['challenge', 'is', 'not', 'complete']);
//console.log(output);
//console.log(typeof output)//--> object

