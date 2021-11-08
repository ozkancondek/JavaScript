// destructuring objects

/* 

//spread and rest operators



let arr = [1,2,3,4];
// arr[0]  reaching element


//const [first,...others] = arr
const [first, , third,...others] = arr

console.log(others); //[ 2, 3, 4 ]
console.log(first); //1
console.log(third);//3

let grades = ["name","lastname",[555,89,74,54]]

let [,,notes]=grades;
console.log(notes); //[ 555, 89, 74, 54 ]
 */



const hotel = {
    name: 'Hotel Clarusway',
    categories: ['Spa', 'Swimming Pool', 'Resort'],
    options: ['just stay', 'free breakfast', 'all inclusive'],
    rooms: ['2-bed', '3-bed', '4-bed'],
    receptionHours: {
      mon: {
        open: 8,
        close: 22,
      },
      fri: {
        open: 9,
        close: 21,
      },
      sat: {
        open: 10,
        close: 20,
      },
    },
  
    book: function ({ arrival, departure, optionIndex = 0, roomIndex = 0 }) {
      console.log(
        `${this.rooms[roomIndex]} is booked with ${this.options[optionIndex]} between ${arrival}-${departure}`
      );
    },
  };

  // i wanna get options from hotel object

  //hotel.categories   is also a method but its  not easy to reach opening hours

  const {name,options,rooms} = hotel;

  console.log(options); //[ 'just stay', 'free breakfast', 'all inclusive' ]

  //i want to say for names hotel names

  let {name:hotelName,options:hotelOptions}=hotel;

  console.log(hotelName); //Hotel Clarusway
  hotelName = "blueberry";

  console.log(hotelName); // blueberry  but ist clarusway in object









/* 
  let x = 10;
  let y = 45;

  const obj = {x:1,y:2,z:3};

  ({x,y}=obj)
  console.log(x,y); //1,2 */


  const {mon} = hotel.receptionHours;

  console.log(mon); //{ open: 8, close: 22 }

  const {
      fri:{
          open,close
      }
  }=hotel.receptionHours;


  console.log(open,close);  //9 21

  const {
    fri:{
        open:opensAt,close:closesAt
    }
}=hotel.receptionHours;


console.log(opensAt,closesAt);  //9 21



const roomIndex = 2;

hotel.book({ // i dont have to fallow argument order with this method
    arrival:"12:00",
    departure:"14:00",
    
}) //2-bed is booked with just stay between 12:00-14:00



let newHotel = {...hotel}; // i copied hotels

//change the name

newHotel.name = "blueberry";

console.log(newHotel); //name: 'blueberry',


const {sat,...weekdays}=hotel.receptionHours;

console.log(sat,weekdays);



const guestCount = hotel.numGuest || 100; // its gonna be equal to 100 if its undefined  =>  hotel.numGuest ?? 100;  also possile syntax null check



console.log(hotel.receptionHours.tue?.open); // undefined check with ? 





  //https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/