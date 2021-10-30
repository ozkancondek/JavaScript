

const person = {
    age : 25,
   /*  tellAge : function(){
        console.log(this.age);
        console.log(this);  // this shows the person object here which is function belong to
    }.bind(this)  // this here shows global  object */

    // iam gonne try to write function with arrow

    tellAge : () => {
        console.log(this); //it shows window object like connected with bind
        console.log(this.age); // this is undefined because in window age is unexist
    }


   
}



person.tellAge();