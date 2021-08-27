//while
let i = 0;
while(i < 10){ // 0 to 9
    console.log(i);
    i ++; // i += 1
};


// breal and continue
let a = 0;
while (a<10){
    console.log(a)
    if (a === 3 || a === 5 ){ // break in 3
        break;  
    }; // if i write countinue, dont run the codes below and jumps to start. Thats mean loop continues forever.
    a ++ ;
}
let b = 0;
while ( b<0){
    if (b == 5){// if i write countinue, dont run the codes below and jumps to start. Thats mean loop continues forever.
        b ++;// to prevent it, i have to define b value increment on top of the continue command
        continue;
    };
    console.log(b);
    b ++;

};

//do while

let m = 0;
do { // it runs first than goes to while
    console.log(m);
    m ++;

}while(m<5);

let ls = [4,5,8,9];
for(x = 0; x<ls.length;x++){ //for(start,condition,increment){}
    console.log(ls[x]);
};

// forEach for arrays
ls.forEach(function(m,o){ // apply the function for each elemnts of list
    console.log(m,o); //o is index number
});

const users = [
    {name:"ozkan", age:25},//3 different objects
    {name: "zkan", age:26},
    {name:"kan" , age:27}
];
// i want to get only name variable from objects and assign them a list.
const names = users.map(function(user){
    return user.name;
});

console.log(names); // list of names

const ages = users.map(function(n){
    return n.age;
});

console.log(ages); // list of ages

const usr = {
    name:"ozkan",
    age : 25
};
for (let c in usr){ // every key and value
    console.log(c,usr[c]);
};