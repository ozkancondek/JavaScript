//Write a function which takes a ROT13 encoded string as input and returns a decoded string.

//All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {
    let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "NOPQRSTUVWXYZABCDEFGHIJKLM"
    let arr = [];

    for (let i = 0; i < str.length; i++){
        let a = input.indexOf(str[i]);
        if(a==-1){
            arr.push(str[i])
        }else{
            arr.push(output[a])
        }
       

    }

    return arr.join("");
  }

  console.log(rot13("SERR CVMMN!"));
  