

function confirmEnding(str, target) {

       return str.split("")
        .splice(
            str.length - target.length, target.length)
        .join("")
        === target
        ? true : false;  
        /* return str.endsWith(target) */
}

console.log(confirmEnding("Bastian", "a"));