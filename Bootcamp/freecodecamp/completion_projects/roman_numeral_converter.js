//Convert the given number into a roman numeral.

//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    var chars = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},str = '',i;
    for ( i in chars ) {
      while ( num >= chars[i] ) {
        str += i;
        num -= chars[i];
      }
    }
    return str;
  }

  console.log(convertToRoman(10));