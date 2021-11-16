// class Student1{
//     constructorStudent(imageUrl, studentName, studentPath){
//         console.log(this);
//     }
// }
function Student(imageUrl, studentName, studentPath) {
  this.imageUrl = imageUrl;
  this.studentName = studentName;
  this.studentPath = studentPath;
}

const std = new Student("url", "Ryan", "Fullstack");
const std2 = new Student("url", "Daniel", "AWS");
