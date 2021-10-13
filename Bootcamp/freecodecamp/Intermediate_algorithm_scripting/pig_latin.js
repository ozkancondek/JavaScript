/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */


 

//let consonant = /[(?![aeiou])[a-z]]/gi; // List of consonants (Global and Insensitive)
 


function translatePigLatin(word) {
    let vowel= /[aeiou]/gi;
    if(vowel.test(word[0])){
        return word+"way";


    }else if(!vowel.test(word)){
        return word +"ay";
        

    }
    
    
    else{   
     
        while(!vowel.test(word[0])){
            word += word[0];
            word = word.slice(1);

            
        

        }
        return word +"ay";
     }
     
    
     
    
  }


  console.log(translatePigLatin("rhythm"));



  



  
 