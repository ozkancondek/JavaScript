// DOM Accessing
let adi = window.document.getElementById("first_name");
window.console.log(adi);
// let firstNameByClass = document.getElementsByClassName("input--style-4")[0];
// console.log(firstNameByClass);
// let firstNameByName = document.getElementsByName("first_name")[0];
// console.log(firstNameByName);
// let firstNameByTagName = document.getElementsByTagName("input")[0];
// console.log(firstNameByTagName);
// let firstNameByQuerySelectorId = document.querySelector("#first_name");
// console.log(firstNameByQuerySelectorId);
// let firstNameByQuerySelectorClass = document.querySelector(".input--style-4");
// console.log(firstNameByQuerySelectorClass);
// let firstNameByQuerySelectorAllClass = document.querySelectorAll(".input--style-4")[0];
// console.log(firstNameByQuerySelectorAllClass);

let soyadi = document.getElementById("last_name");

//property vs. attribute
// let idAttr = firstNameById.getAttribute("id");
// console.log(idAttr);

// let classAttr = firstNameById.getAttribute("class");
// console.log(classAttr);

// firstNameById.setAttribute("class", "redColorClass");

// let classProp = firstNameById.className;
// console.log(classProp);

adi.value = "Ryan";
soyadi.value = "Daniel";

// // 🔥🔥🔥🔥🔥 FULL NAME(camelcase =>RYAN DANIEL) and E-MAIL(lovercase => ryan.daniel@clarusway.com) CHALLENGE  🔥🔥🔥🔥🔥

let fullAd = document.getElementById("full_name");
let email = document.getElementsByName("email")[0];
console.log(adi);
fullAd.value = `${adi.value.toUpperCase()} ${soyadi.value.toUpperCase()}`;
console.log(fullAd.value);
email.value = `${adi.value.toLowerCase()}.${soyadi.value.toLowerCase()}@clarusway.com`;
console.log(email.value);