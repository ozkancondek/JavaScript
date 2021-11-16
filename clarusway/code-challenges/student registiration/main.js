// get values
const _name = document.getElementById("name");
const _path = document.getElementById("path");
const _url = document.querySelector("#url");
const addButton = document.getElementById("registration-form").lastElementChild;

const clearStudentsBtn = document.querySelector("#clear-students");
const tbody = document.querySelector("#Students");
const loading = document.querySelector("#loading");
const table = document.querySelector(".table");
const ui = new UI();

const showLoading = () => {
  loading.style.display = "block";
};

const removeLoading = () => {
  setTimeout(() => {
    loading.style.display = "none";
  }, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  addButton.addEventListener("click", addNewStudent);
  clearStudentsBtn.addEventListener("click", clearAllStudents);
});

const addNewStudent = () => {
  const imageUrl = _url.value.trim();
  const studentName = _name.value.trim();
  const studentPath = _path.value.trim();
  if (imageUrl === "" || studentName === "" || studentPath === "") {
    confirm("please enter students' info!");
  } else {
    const student = new Student(imageUrl, studentName, studentPath); // i created an object and i will append it
    //addStudentToUI function

    //info message function
  }
};

const clearAllStudents = () => {};
