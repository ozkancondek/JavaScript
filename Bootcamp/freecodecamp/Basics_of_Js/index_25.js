//Declare a Read-Only Variable with the const Keyword

/*const has all the awesome features that let has,
 with the added bonus that variables declared using const are read-only.
  They are a constant value, which means that once a 
  variable is assigned with const, it cannot be reassigned.
  */
/*const FAV_PET = "Cats";
FAV_PET = "Dogs";
console.log(FAV_PET)

The console will display an error due to reassigning the value of FAV_PET.
*/
const s = [5, 6, 7];
//s = [1, 2, 3]; i can naot define it again with const
s[2] = 45; // but i can change an element in array.Mutuabla
console.log(s);


//Prevent Object Mutation
/*As seen in the previous challenge, const declaration
 alone doesn't really protect your data from mutation.
  To ensure your data doesn't change, JavaScript provides a
   function Object.freeze to prevent data mutation.*/

let obj = {
    name : "ozkan",
    lastname :"condek"
};

Object.freeze(obj); // if i freeze the object, the oder alterations not gonna work anymore and output will be the original object form
obj.name = "OZKAN";
obj.age = 24;
console.log(obj);

