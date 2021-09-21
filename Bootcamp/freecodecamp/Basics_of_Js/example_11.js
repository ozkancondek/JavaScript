



//finding avarage value with reduce

const number = [19.46, 46.95, 47.5];
const ortalama = number.reduce((total, amount, index, array) => {
    total += amount;
    if( index === array.length-1) { 
      return total/array.length;
    }else { 
      return total;
    }
  });
  console.log(ortalama); //37.97