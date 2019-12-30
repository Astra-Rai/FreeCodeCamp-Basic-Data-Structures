//Introducing Else Statements

function testElse(val) {
  //set local variable result to an empty string  
  var result = ""
  // Only change code below this line
  //if argument passed through the parameter val is greater than 5....
  if (val > 5) {
    //set result = "Biggle than 5"
    result = "Bigger than 5";
     //else, set result to string"5 or Smaller"
  } else {

  result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test

var output = testElse(4);
console.log(output);
//console.log(testElse(4));