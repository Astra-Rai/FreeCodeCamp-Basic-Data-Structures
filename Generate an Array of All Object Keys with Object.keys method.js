/*

Object.keys() method:

The Javascript Object.keys() method returns an array of the given object's property names, in the same order as we get with a standard loop. The Object.keys() method is used to return the array whose elements are strings corresponding to the enumerable properties found directly upon the object.

Resource: https://appdividend.com/2018/12/27/javascript-object-keys-example-object-keys-tutorial/

Instructions: 

Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

*/
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line

  return Object.keys(obj);

  // change code above this line
}

console.log(getArrayOfUsers(users));//->["Alan", "Jeff", "Sarah", "Ryan"]  