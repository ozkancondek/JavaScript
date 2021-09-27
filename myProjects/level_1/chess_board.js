

//https://edabit.com/challenge/kDoi6Eob7KuELwjjp


const chessBoard = ([file, rank]) => (
	(file.charCodeAt() % 2 === rank % 2) ? 'black' : 'white'
);

console.log(chessBoard("a1"))