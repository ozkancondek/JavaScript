

//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA


const detectWord = function(word){
    let ls = [];
    for (var i=0; i < word.length; i++){
         
        if (word[i] === word[i].toLowerCase()){
            ls.push(word[i]);
            
        }

    }
    return ls.join("")
}
console.log(detectWord("UcUNaUOHNt"))