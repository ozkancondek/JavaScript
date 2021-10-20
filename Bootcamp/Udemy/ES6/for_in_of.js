

const person = {
    name:"ozkan",
    lastname:"condek",
    age:25
};

const arr = ["a","b","c"];

const name = "OZKAN";

// For in

/* for (let i in person){
   // console.log(i);  // name lastname age
   console.log(i,person[i]);
}


for (let j in arr){
    //console.log(j); // just index---0,1,2
    console.log(arr[j]);
}

for (let x in name){
    //console.log(x); // index
    console.log(name[x]);
} */




//for off- arr and str



/* for (let i of person){   TypeError: person is not iterable
    console.log(i);
} */


for(i of arr){
    console.log(i);
}

for(i of name){
    console.log(i);
}

arr.forEach(a => {
    console.log(a);
    
});