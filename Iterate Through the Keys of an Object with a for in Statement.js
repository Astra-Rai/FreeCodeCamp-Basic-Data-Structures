/*
Instructions: 

We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.


for in loop

example

for(var in object) {
code block to be executed
}

parameter values 
var, required. a variable that iterates over the properties of an object
object, require. the specified object that will be iterated

*/

let users ={
    Alan:{
      age: 27,
      online: false
    },
    Jeff:{
      age: 32,
      online: true
    },  
    Sara: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
}
//function, one parameter, obj
function countOnline(obj){
  //variable count used as a container to show number of online users in users object
  var count = 0;
//iterate through properties in users object 
  for(let names in users){
    //if users online is = boolen true, add to count variable
    if(obj[names].online === true){
    //increment number of count variable
      count++;
    }
  }
  
  return count;
}

console.log(countOnline(users));