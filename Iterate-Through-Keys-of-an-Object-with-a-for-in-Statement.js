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
    age: 49,
    online: false
  },
  
  Ryan:{
    age: 19,
    online: true

  }
}

function countOnline(obj){
  var count = 0;
  for (let name in users){
    if (users[name].online === true) {
      count++;
    }
  }
  return count;
}

console.log(countOnline(users));