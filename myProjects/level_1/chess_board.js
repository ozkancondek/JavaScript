

//https://edabit.com/challenge/kDoi6Eob7KuELwjjp


/* const chessBoard = ([file, rank]) => (
	(file.charCodeAt() % 2 === rank % 2) ? 'black' : 'white'
);

console.log(chessBoard("a1")) */



const chessBoard = function(code){
    let letter = "abcdefgh"
    for (var i = 0; i < letter.length; i++){
        if((letter.indexOf(code[i]) % 2 == 0 && parseInt(code[1]) %2 == 1)){
            return "black"
        }else{
            return "white"
        }
    }

}

console.log(chessBoard("d1"))


/*
var c = "ozkan".includes("a")
console.log(c)   return boolean value
*/ 