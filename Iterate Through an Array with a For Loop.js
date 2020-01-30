/*
JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables. The addition assignment operator ( += ) adds a value to a variable.
*/


// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;



for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total =0;
//note:; if myArr.length - 1, vaule of total is 14 not 20
for (var i = 0; i <myArr.length; i++){
  total += myArr[i];
}
console.log(total);
// Only change code below this line