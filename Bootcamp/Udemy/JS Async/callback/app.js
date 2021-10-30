//send a function to another function as parameter = callback



/* const langs = ["a","b","c","d"];


langs.forEach(lang => {
    console.log(lang);
}); */


//async example: no function waits for other


/* function process1(){
    setTimeout(function(){
        console.log("process1");
    },3000)
}

function process2(){
    setTimeout(function(){
        console.log("process2");
    },2000)
}
// process2 gonna run than process1
process1();
process2();

console.log("I am first");
 */

//in this case, i want to run process1 first and than process2

/* function process1(callback){
    setTimeout(function(){
        console.log("process1");// 3secont, process1 2second, process2
        callback(); // async to sync
    },3000)
}

function process2(){
    setTimeout(function(){
        console.log("process2");
    },2000)
}

process1(process2);
 */
// if i would like to run a spesific function after i obtain spesific data from external resource, i use this method





/* const langs = ["a","b","c","d"];


function addLang(lang){

    setTimeout(function(){
        langs.push(lang);
        console.log("added");

    },2000);
}


function getAllLangs(){

    setTimeout(function(){
        langs.forEach(lang => {
            console.log(lang);
        });
    },1000)
}



addLang("ozkan");
getAllLangs(); */

//in this case(async), getAllLangs run first ant counts all letters from a to d
//than runs addLang and adds "ozkan to langs"
//but i cant see "ozkan on console

const langs = ["a","b","c","d"];


function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("added");
        callback();

    },2000);
}


function getAllLangs(){

    setTimeout(function(){
        langs.forEach(lang => {
            console.log(lang);
        });
    },1000)
}



addLang("ozkan",getAllLangs);


//this is an ol method but still on use