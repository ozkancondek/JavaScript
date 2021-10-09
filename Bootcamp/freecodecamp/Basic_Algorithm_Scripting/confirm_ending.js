

function confirmEnding(str, target) {

    return str.split("")
        .splice(
            str.length - target.length, target.length)
        .join("")
        === target
        ? true : false;
}

console.log(confirmEnding("Bastian", "a"));