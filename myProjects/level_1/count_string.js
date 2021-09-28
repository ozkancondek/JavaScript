
//https://edabit.com/challenge/kbFhwaDyrd79JrgeB


function countString(char,word){
    let count = 0;
    for (var i = 0; i < word.length; i++){
       if (word[i] === char){
           count++;
       }
    }
    return count;
}

console.log(countString("b", "big fat bubble") )