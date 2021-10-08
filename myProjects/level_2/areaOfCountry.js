
//https://edabit.com/challenge/ejfdLAp673DwxSg5R



const areaOfCountry = (country,area) => {
    const result = `${country} is ${(area / 1489400).toFixed(2)}% of the total world's landmass.`;
    return result;
}

console.log(areaOfCountry("ozkan",7098242));
