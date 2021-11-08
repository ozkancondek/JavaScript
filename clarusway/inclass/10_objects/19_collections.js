//collections

//map

let map = new Map();

map.set("2","string two");
map.set(2,"number 2");
map.set(true,"true");
map.set(2,"new 2")
map.set("add", function(x,y){
    return x+y
})^

console.log(map.get("add")(5,9)); // 14

console.log(map); // Map(3) { '2' => 'string two', 2 => 'number 2', true => 'true' }

console.log(map.size); //3
console.log(map.has(2));

console.log(map.get(2)); //number 2
console.log(map.keys()); //[Map Iterator] { '2', 2, true, 'add' }
console.log(map.values());
console.log(map.entries());

for (const [key,value] of map.entries()){
    console.log("key", key);
    console.log("value",value);
}

let wrongMap = new Map();

wrongMap["ozkan"]="condek"

console.log(wrongMap); //Map(0) { faef: 'dp,aefü' }

console.log(wrongMap.has("ozkan")); // false




// but size is 0

// i have to use set and get




 