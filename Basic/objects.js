/* A singleton is a function or class which can have only one instance. 

Singleton is a design pattern that tells us that we can create only one instance of a class 
and that instance can be accessed globally.
*/

/* Objects can be declearde in two ways 

1. Using Literals: Literals not make singleton
E.g const JsUser={} literal

2. Constructor : Constructor always make singleton
e.g Object.create

no performance difference nothing just only singleton

Make objects
*/

const mysym = Symbol("key1") //symbol another data type used in react
const mySym = Symbol("key2") //must write 
const JsUser={
    name:"Mudasir", // ->You give the string here, object,number,arrays etc all,
    "lastname": "Ahmad", // -> "lastname store like this in system we dont declare"
    age:34,
    email:"google@gmail.com",
    isloggedin:false,
    [mysym]:"mykey1", //Symbol declare its important to rember
    [mySym]:"mykey2",
    "full_name":"Mudasir Ahmad",
    lastlogin:['monday','tuesday']
} 
//console.log(JsUser);
//console.log("JsUser");

// console.log(JsUser.email); //FIrst ways to access object using .email
// console.log(JsUser["full_name"]);
// console.log(JsUser["email"]);//2nd way to acccess object using ["email"]
// //this you can use which are not accessble to '.'operator.

console.log(JsUser[mysym]); // show the symbol
console.log(typeof mysym); //type of symbol is "symbol"
console.log(JsUser[mySym]);

/* Freeze the object means you cannot change the values of object 

1.here we want to change the email but we cannot because we freeze it.
*/
// Object.freeze(JsUser);
// JsUser.email="mudasirahmad3@gmail.com"
// console.log(JsUser["email"]);

// /* Change values in objects */
// JsUser.name="mudasirahmad3@gmail.com"
// console.log(JsUser["name"]);
// console.log(JsUser);

/* Function used in object */
JsUser.greeting=function () {
    console.log(`welcome ${this.name}`);
}

console.log(JsUser.greeting());