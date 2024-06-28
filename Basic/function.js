// function mudasir() {
//     console.log("welcome");
// }

// mudasir //--> refrence react we use//and in dom manipulation
// //mudasir()// --> used to execute function...
// //const h1=mudasir()   //-->put the value of function in h1....

// //console.log(h1);

// function add(number1,number2) {
//     return(number1+number2)
//     console.log("heloo"); // --> this will not work because return statement is last 
// }

// const a=add(2,4);

// //console.log(`The addition of two numbers = ${a}`);

// function login(username) {
//     if (username === undefined) {
//         console.log("please Enrter username");
//         return
//     } else {
        
//     return `${username} Just logged in`
// }
// }
// console.log(login());

// /* another method*/
// // (!username) is equal to also like (username === undefined) is also write in React

// function login1(username) {
//     if (!username) {
//         console.log("please Enrter username");
//         return
//     } else {
        
//     return `${username} Just logged in`
// }
// }
// console.log(login1());

// //also we can write like this :

// function login(username="sam") {
//     if (username === undefined) {
//         console.log("please Enrter username");
//         return
//     } else {
        
//     return `${username} Just logged in`
// }
// }
// //console.log(login("mudasir")); //if write mudasir then here it will say mudasirjust logged in
// // if empty then say sam just logged in

// /* Rest and spread operator 

// 1. Here we use Rest operator

// 2. Rest and spread operator are same but depend on ussage.

// 3. For addshooping cart there we use lot of values so we rest operator.

// 4. Rest operator will store in Array and we will use loop and add them.
// */
// //function calculateprice(...number1) {
// //    return number1;
// //}
// //console.log(calculateprice(20,34,23,33)); 

// /* REst operator using val1 val2 interivew question 

// Here First value will be store in val1 and second value in val2 thats output will be 23 33
// 1. Value 20 is store in val1
// 2. Value 33 is store in val2
// */
// //function calculatePrice(val1,val2,...number1) {
// //    return number1;
// //}
// //console.log(calculatePrice(20,34,23,33)); 

// /* Onject pass in function */
/*
const user={
    name:"Mudasir",
    id:34
}
function handleObject(anyObject) {
    
    console.log(`the name is ${anyObject.name} and id is ${anyObject.id}`);
}
*/
//handleObject(user)// give object in parenthesis

/*here u can give the data also 
handleObject(
    {
        name:"sam",
        id:34
    }
)
*/

const n=[10,20,45]
function array(n) {
    return n[1];
}
//console.log(array(n));   

console.log(array([1,2,3,4]));