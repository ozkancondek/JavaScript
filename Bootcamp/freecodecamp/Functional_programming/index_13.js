//Apply Functional Programming to Convert Strings to URL Slugs

function urlSlug(title) {
    let result = title.toLowerCase().trim().split (/\s+/).join("-")
    return result;
  
  
  }


  console.log( urlSlug(" Winter Is  Coming"));


  //Do a global search for whitespace characters in a string:

var str = "Is this all there is?";
var patt1 = /\s+/g;
var result2 = str.match(patt1);
console.log(result2);