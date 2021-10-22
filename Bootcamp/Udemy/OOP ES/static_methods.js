

//Static Methods


/* class Mathematic{


    cube(x){
        console.log(x*x*x);
    }


}
 I cant call it with class name
const math = new Mathematic();
math.cube(3) */

 //i want to use my function without using object
 //Because in example above, i need to recall my function with math object

 class Mathematic{


   static cube(x){
        console.log(x*x*x);
    }


}

 Mathematic.cube(4); // i can call it now without object,

 //if ctry to call it with object again;

/*  const a = new Mathematic();

 a.cube(5) // i am gonna get error 
 
 Some static methods

 Math.sqrt();
 Object.create;
 
*/
 
