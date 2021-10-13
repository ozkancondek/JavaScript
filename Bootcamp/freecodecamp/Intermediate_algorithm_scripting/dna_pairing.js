//DNA Pairing


const pairElement = function(word){
    let pairArr = [];
    let pairObj = {
        "A": "T",
        "T":"A",
        "G":"C",
        "C":"G"

    }
    for(let i = 0 ; i < word.length; i++){

        pairArr.push([word[i],pairObj[word[i]]])
    }
    return pairArr;
}

console.log(pairElement("GCG") );