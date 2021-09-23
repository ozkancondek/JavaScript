//https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

whichIsLarger = (f,g) =>  f()>g()?'f':g()>f()?'g':'neither'
     
console.log(whichIsLarger(() => 25,  () => 25))



/*
function whichIsLarger(f,g){
    if(f() > g()){
        return "f";
    }
    else if( f()< g()){
        return "g";
    }else{
        return "neither"
    }
}
*/