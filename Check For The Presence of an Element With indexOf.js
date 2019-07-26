/*
Instructions: 

indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. 
We have defined a function, quickCheck, that takes an array and an element as arguments. 
Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

The indexOf() method returns the first index at which a given element can be found in the array, 
or -1 if it is not present

*/
function quickChecker(arr,elem){
  if(arr.indexOf(elem)>=0){
    return true;
  } else {
    return false;
  }
}
console.log(quickChecker(['squah', 'onions', 'shallots'],'mushrooms'));