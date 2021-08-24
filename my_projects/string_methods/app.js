let value;
const fname = "Luis"
const lname = "Armstrong"
const langs = "Java, Python, C++"

value = fname+" "+lname
value = "ozkan";
value = value + " "+"condek"; //value += value + " "+"condek";
value = fname.length; // length of the string
value = fname.concat(" ",lname," ", "caz") //concatenate
value = fname.toLowerCase();
value = fname.toLocaleUpperCase();
value = fname[3]; // indexing
value = fname[fname.length-1]; // fname[3]
value = fname.indexOf("u");  // index of a letter
value = fname.indexOf("ö");  // if the character not in str, returns -1.
value = fname.charAt(2); // works like indexof
value = langs.split(",");  //["Java", " Python", " C++"] in array
value = langs.replace("Python","CSS"); // replaces array elements
value = langs.includes("Java"); // in: return true if "Java" in langs









console.log(value);