const user={
    username:"hitesh",
    price:355,

    welcomemessage: function () {
        //console.log(`${this.username} welcome to website`);
        
        //console.log(this); 
        /* THis will print all the data of user hitesh includng function as well as sam 
        */
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
//console.log(this); // --> this will show empty object here 

/* global object is window object important to rember */


// function chai()
// {
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()
/* This keyword is not work in function this will work in objects only */


/* Arrow function */

 const chai=()=> {
    console.log("mudasir");
}
chai()
/* Explict Arroww function */

const add=(num1,num2)=> {
    return num1+num2
}
console.log(add(3,4));

/* Implicit Arrow function */

const sub=(num1,num2) =>num1+num2    //---> We use arrow in one line use in react rember no parenthsis {} only in one line

console.log(sub(5,4));            


const mul=(num1,num2)=>(num2*num1)   //---> We use arrow function in the react rember only add "()""
                                  // one line statement
console.log(mul(4,5));

// Return object here -- wrap the ({username:"hitesh"})

const mul1=(num1,num2)=>({username:"hitesh"})

console.log(mul1(2,5));

/* For Array using Arrow function */ 

const myArray=[1,2,3,4]

myArray.forEach(()=>(console.log(myArray)));