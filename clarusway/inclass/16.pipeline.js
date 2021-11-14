

//choose negetive coordinates from coordinates array and print it in console





const coords = [-100, 150, -32, 43, -20];


coords.filter(x => x < 0).map(x => -x).forEach(x => console.log(x));

/* const arr = coords.filter(x => x < 0).map(x => -x).forEach(x => console.log(x));
console.log(arr);  can not return an output
 */



//chohose from person array the persons whose name starts with particular letter


const persons = ["Ozkan", "marie", "joh", "Ellie"];

const person1 = function (letter, array) {
    return persons.filter(a => a[0] == letter || a[0] == letter.toUpperCase())
    //return persons.filter(a => a.startsWith("o"))

}

console.log(person1("o"))


//write the length of every element in persons array like: ozkan:5


persons.forEach(el => {
    console.log(`${el}:${el.length}`);
});