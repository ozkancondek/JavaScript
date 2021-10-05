 //Generate an Array of All Object Keys with Object.keys()


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


  let a = Object.keys(obj);
  let b = Object.values(obj);


  console.log(a,b);

  //Modify an Array Stored in an Object

  let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
     userObj.data.friends.push(friend); 
     return userObj.data.friends;
  }
  
  console.log(addFriend(user, 'Pete'));