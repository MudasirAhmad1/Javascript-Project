var a=22;
if (true)
{
    var a;
    const b=13;
    let c=33;
}
console.log(a); //this will print because var uses values out of scope
//console.log(b); //this will show error 
//console.log(c); //this will show error also

function one() {
    console.log("Welcome");
    const name1= "Hitesh"
    

    function two() {
        console.log("2nd Function");
        console.log(name1);   //--> inhertience concept inherit property from class one
        //const website:"mudasir@com"
    }
    two()
}
one()

name(3)   // --> Here it will run becuase it only function call
function name(num) {
    console.log(num+1);
}
// second way to define function
//num2(2)    // --> this will show error: Cannot access 'num2' before initialization

const num2=function (num) {
    console.log(num+1);
}
num2(2) //here it will not show error

