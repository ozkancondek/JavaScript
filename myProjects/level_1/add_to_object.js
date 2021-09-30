//https://edabit.com/challenge/9KEKJG5PZTFmG3Zau


const addName = function(obj, key, value){
    obj[key] = value;
    return obj;

}


console.log(addName({ piano: 500 }, "Brutus", 400));
 

/* const addName = (obj, name, value) => (obj[name] = value, obj);

function addName (obj, name, value) {
	return {...obj, [name]: value}
}; */