/*
Instructions: 

Let's revisit our foods object example one last time. If we wanted to remove the apples key, we can remove it by using the delete keyword like this:

delete foods.apples;

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// change code below this line

  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
// change code above this line

console.log(foods);

/*
Output 

Object {
  apples: 25,
  bananas: 13,
  grapes: 35
}
*/