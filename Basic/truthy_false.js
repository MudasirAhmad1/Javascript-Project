const userlogin =[]
if (userlogin) {
    //console.log("Welcome To Dubai");
}
else
{
    //console.log("Not Run");
}
/*

falsey value

false, 0, -0, BIgint, 0n ,null ,Undefined, Nan, "",

truthy value 

"0", 'false, " ", [], {}, function(){}

*/

if (userlogin.lenth===0) {
    //console.log("Array is empty");
}
else{
    //console.log("array not empty");
}

const emptyObj={}
if (Object.keys(emptyObj.lenth===0)) {
   // console.log("object is empty");
}

/*
1. false==0 output: True

2. false=='' output: True
3. 0=='' output: True

The Nullish Coalescing operator in JavaScript is represented by two question marks (??). 
It takes two operands and returns the first operand if it is not null or undefined. Otherwise, 
it returns the second operand. 
It is a logical operator introduced in ES2020.

*/

// let res;
// if (op1 != null || op1 != undefined) {
//    res = op1;
// } else {
//    res = op2;
// }

let val1
val1=  10 ?? 5

console.log(val1);

/* 
1. when u use api ,firebase,database call DIRECTLY U WILL NOT GET RESponse u get 2 values
there are chances u will get null or undefined that will effect code structure 
*/
let val2
val2=  null ?? 5

console.log(val2);

let val3
val3=  undefined ?? 9

console.log(val3);

let val4
val4=  null ?? 5 ?? 10

console.log(val4);

const ice=100;
ice <=90 ? console.log("less than") : console.log("GReater");