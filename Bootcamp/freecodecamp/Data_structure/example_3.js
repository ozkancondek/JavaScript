 //Iterate Through the Keys of an Object with a for...in Statement
//count true

let obj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

let count = 0;

function countOnline(usersObj) {
  
  for (var i in usersObj){
    if( usersObj[i].online === true){
      count +=1
    }
  }
  return count;
   
}

console.log(countOnline(obj));