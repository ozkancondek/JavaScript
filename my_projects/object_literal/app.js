
let value;


const programmer = {
    name : "ozkan",
    age : 25,
    email : "ozkncndek",
    langs : ["python","java","sql"],

    adress : {
        city : "bartin",
        street : "ucpnar"
    },

    work : function(){
        console.log("he is working");
    }

}
value = programmer;
value = programmer.email; // get email adress from object
value = programmer["email"]; // same query
value = programmer.langs; // get languages
value = programmer.adress.city; // from adress get city
programmer.work(); // runs fuction in work

const programmers = [  // array with objects
    {name : "ozkan", age : 25},
    {name: "condek", age : 24}
]

value = programmers[0];  // returns object
alue = programmers[0].age; // gets age


console.log(value);