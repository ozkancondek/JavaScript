//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let word = alphabet.slice(alphabet.indexOf(str[0]),alphabet.indexOf(str[str.length-1])+1);
    let arr = str.split("");
    let missing = word.filter(x => !arr.includes(x));
    if (alphabet.join("") === str)  {return undefined;};
    return missing.join("");
     
  }

  console.log(fearNotLetter("stvwx"));

 // let intersection = arr1.filter(x => arr2.includes(x));
 //let difference = arr1.filter(x => !arr2.includes(x));

 