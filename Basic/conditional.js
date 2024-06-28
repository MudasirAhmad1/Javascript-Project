if (true)
{
    console.log("welcome true ");
}
else
console.log("Else");

/*
< less than ,
> greater than
<= greater than equal too
>= lessthan equal to
== equal to
!= not equal to
=== strict check 

!== 
*/

const score =100

if (score > 50)
{
    var name="mudasir"   //here if u use var u can use it outside the if also
    // let name="Mudasir" //if let then u cannot use it outside if 
        console.log(`the Number is greater ${name}`);
}
else
{
    console.log(name);
}
console.log(name); //run only in var case otherwise not

const userlogin =true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if (userlogin && debitcard && 2==3)
{
    console.log("Allow to buy course");
}
if (loggedinfromemail || loggedinfromgoogle||2==2) {

    console.log("userloggedin");
    
}
