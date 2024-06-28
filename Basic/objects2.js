/*
const tinderUser=new Object() //singeloton object,constructor
console.log(tinderUser);

const JsUser={ //non singleton object using literals
    name:'mudasir',
    age:23
}
console.log(JsUser);

*/

/* StART */

const TinderUser={}
TinderUser.id=12;
TinderUser.name="Mudasir";

//console.log(TinderUser);

const RegularUser={
    email:"sam@gmail.com",
    fullname:{
        usefulname:{
            
        username:"Mudasir",
        name: "Mudasir AHmad"
        
    }
    }
}

//console.log(RegularUser.fullname?.usefulname.username); //nesting finding exact what u want 
// fullname? protection if full name not exist so? mostly response from api.. so will not ifelse everywhere

/* Merge objects */

const obj1={1:"mudasir",2:"Ahmad"}
const obj2={3:"mudasir",4:"Ahmad"}

//console.log(obj1,obj2);

//const  obj3={obj1,obj2};
/* The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
 It returns the modified target object.

const returnedTarget = Object.assign(target, source);
 */
const obj3=Object.assign({},obj1,obj2); // {} empty array {}Target and obj1 and obj2 is source 
console.log(obj3);
/*We will not use it most of the time we use spread operator */
const obj4={...obj1,...obj2};

console.log(obj4);

console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser)); //show in array key and value key and value

console.log(TinderUser.hasOwnProperty(1)); //is used to check the property is present there or not.

const users=[
    {
        id:1,
        email:"assdff@gmail.com"
    },
    {
        id:1,
        email:"assdff@gmail.com"
    },
    
]
console.log(users[1].email);
