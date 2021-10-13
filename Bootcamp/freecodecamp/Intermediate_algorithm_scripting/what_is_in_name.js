

function whatIsInAName(collection, source) {
    var arr = [];
    var arr1 = [];
    var z = Object.entries(source).join("");
    
   for ( let i= 0; i < collection.length; i++){
         
    arr1.push( Object.entries(collection[i]).join("") )
    
       
    }
    for ( let i= 0; i < arr1; i++){
        if (arr1[i].includes(z)){
            arr.push(collection[i])
        }


    }
    return arr
      
    
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

  function whatIsInAName(collection, source) {
    
    var srcKeys = Object.keys(source);
  
     
    return collection.filter(function(obj) {
      for (var i = 0; i < srcKeys.length; i++) {
        if (
          !obj.hasOwnProperty(srcKeys[i]) ||
          obj[srcKeys[i]] !== source[srcKeys[i]]
        ) {
          return false;
        }
      }
      return true;
    });
  }
  
 


 

 
  
 
