const loading = document.getElementById("loading");

const submitBtn = document.getElementById("submit");

const email = document.querySelector("#email");

const password = document.querySelector("#password");

window.onload = () => {
  setTimeout(fillFormInput, 500);
};

const showLoadingg = () => {
  loading.style.display = "block";
};

const removeLoadingg = () => {
  loading.style.display = "none";
};

const fillFormInput = () => {
  email.value = "eve.holt@reqres.in";
  password.value = "pistol";
  localStorage.setItem("email", EncryptStringAES(email.value));
  localStorage.setItem("password", EncryptStringAES(password.value));
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(e); // if type of btn submit, i need to write it
  apiRegister();
});

const apiRegister = async () => {
  //create an object
  const bodyData = {
    email: email.value,
    password: password.value,
  };
  //console.log(bodyData);
  //console.log(JSON.stringify(bodyData)); // i need to version in api  documentation
  showLoadingg();

  fetch("https://reqres.in/api/register", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-Type": "application/json" }, // methodtype
  })
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      if (jsonResponse.id == undefined) {
        // or jsonResponse.token
        removeLoadingg();
        alert(jsonResponse.error);
      } else {
        removeLoadingg();
        localStorage.setItem("tokenKey", jsonResponse.token);
        localStorage.setItem(
          "tokenKeyEncrypted",
          EncryptStringAES(jsonResponse.token)
        ); // send token to local storage
        // window.location.href = "userList.html"; // return to new page
      }
    })
    .catch((err) => {
      removeLoadingg();
      alert(err);
    });
};
