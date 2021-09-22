//https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj


function canNest(x,y){
    if ((Math.min(...x) > Math.min(...y)) && (Math.max(...x) < Math.max(...y))  ){
        return true
    }else{
        return false
    }


}


console.log(canNest([9, 9, 8], [8, 9]));
 