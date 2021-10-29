/*
main task is, get employee infos from employee.json file and add to the html page
*/

/*  in json file :  i have to keep key names in quotes */




document.getElementById("ajax").addEventListener("click",getAllEmplooyes);


/* function getAllEmplooyes(){

    xhr = new XMLHttpRequest();
 
    xhr.open("GET","employee.json",true);   => this is my structure

    xhr.send();



}
 */

function getAllEmplooyes(){

    xhr = new XMLHttpRequest();
 
    xhr.open("GET","employee.json",true); 

    xhr.onload = function(){
        let list = document.getElementById("employees");
        if(this.status == 200){

            const employees = JSON.parse(this.responseText);

            employees.forEach(emp => {  // for each pbject in list
                list.innerHTML += `
                      <tr>
                        <td>${emp.name}</td>
                        <td>${emp.deparment}</td>
                        <td>${emp.salary}</td>
                      </tr>
                `;
            });

           // console.log(this.responseText); // returns all content from json as a string type
           // console.log(JSON.parse(this.responseText)); // return string to json object or json array


        }
    }

    xhr.send();



}

