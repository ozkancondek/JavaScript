const name ="ozkan";
const department = "Sales";
const salary = 4000;

const a = `Isim:${name}\nDepartment${department}\nSalary${salary}` 
const b = "isim: " + name + "\n" + "Department: "+department+"\n"+ "salary: "+salary
console.log(a);
console.log(b);
//const html = "<ul> " +      Make a list
//            "<l+i>"+ name + "</l+i>"
//            "<li>"+ department + "</li>"
//            "<li>"+ salary + "</li>"
//            "</ul> " ;


const html =`
    <ul>
        <li>${name}</li>
        <li>${department}</li>
        <li>${salary}</li>
        <li>${10/2}</li>  
    </ul>` // i can also run js code in it
document.body.innerHTML = html;
