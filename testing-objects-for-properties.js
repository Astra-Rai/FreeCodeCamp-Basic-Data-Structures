//freeCodeCamp
//Basic JavaScript Exercises
//Testing Objects for Properties
//object with three key value pairs, each a string
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
//function pass argument checkProp through function checkObj
function checkObj(checkProp) {
  //use if else statement to check if checkProp argument is a key in the array myObj
  if(myObj.hasOwnProperty(checkProp)){
    //if key is in myObj, print value of key
    return myObj[checkProp];
    //else, print Not Found
    } else {
    return "Not Found";
  }
}
//console.log(checkObj("gift"));
//console.log(myObj.gift);//"pony"
//console.log(myObj);
  /*
  Object {
  bed: "sleigh",
  gift: "pony",
  pet: "kitten"
      }
 */