//https://projecteuler.info/problem=17


let obj = {
    1:3,
    2:3,
    3:5,
    4:4,
    5:4,
    6:3,
    7:5,
    8:5,
    9:4,
    10:3,
    11:6,
    12:5,
    13:8,
    14:8,
    15:7,
    16:7,
    17:9,
    18:8,
    19:8,
    20:6,
    30:6,
    40:6,
    50:5,
    60:5,
    70:7,
    80:6,
    90:6,
    100:7,
    1000:8
}


function howManyLetter(base,ceil){
let arr = [];
for(let i = base ; i <= ceil; i++){
     if(obj[i] != undefined){
         arr.push(obj[i])
     }
     else{
         if(i<=20){
             arr.push(obj[i])
         }
         else if(i>20 && i<100){
             let a = i%10;
             let b = i - (i%10);
             arr.push(obj[a])
             arr.push(obj[b])


         }
         else if(i >= 100 && i < 999){
             let c = i % 100; //998 -98
             if(c == 0){
                 let r = i/100
                 arr.push(obj[r])
                 arr.push(7)
             }
             else{
                let d =( i - (i%100))/100;//900
                arr.push(obj[d]);
                arr.push(10)
                if(obj[c] != undefined){
                    arr.push(obj[c])
                }else{
                   let x = c%10;
                   let y = c - (c%10);
                   arr.push(obj[x])
                   arr.push(obj[y])
                }
             }
             

         }
          
     }
}

 let result = arr.reduce((a,b) => a+b);
 return result;

}



console.log(howManyLetter(1,1000));
