//call-apply-bins


const obj1 = {
    num1:10,
    num2:20
};
const obj2 = {
    num1:100,
    num2:200
};

function addNumbers(num3,num4){
    console.log(this.num1 + this.num2 + num3 + num4);

}


/* addNumbers.call(obj1,100,200);
addNumbers.call(obj2,100,200); */


//addNumbers.apply(obj1,[100,200]); // i need to give an array after object

function getNUmbersTotal(num3,num4){
    return this.num1+ this.num2 + num3+ num4;
};

// produces a copy function

const copyFunc = getNUmbersTotal.bind(obj1);

 