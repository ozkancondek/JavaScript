let value;

const now = new Date(); // takes current time
value = now // shows current date
const date1 = new Date("10-07-1996 06:15:02");
const date2 = new Date("Oktober 07 1996");
const date3 = new Date("10/07/1996");
value = date1 // shows details of date1

value = date1.getMonth(); // 9. mounth
value = date1.getDate(); // day of mounth
value = date1.getDay(); //its monday = 1   its = 0 if sunday
value = date1.getHours(); // gets only hour = 6
value = date1.getMinutes();
value = date1.getSeconds();

// change objects data
date1.setMonth(6);
date1.setDate(19);
date1.setFullYear(2005);
value = date1;


console.log(value);