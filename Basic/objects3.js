const course={
    coursename:"js hindi",
    price:"99",
    courseinstructor: "hitesh"
}
console.log(course.courseinstructor);// First way to access the data

const {courseinstructor:mudasir}=course //another way when u have to so much inside then use it so 
/* courseinstructor:mudasir make it small to mudasir */

console.log(mudasir);

/* Destructuring of array used in react also 

const navbar=(props.company) =>{ // const navbar=(company) =>{ //we write only company
     
}
navbar(company="hitesh")
*/
// now these days values comes from backend in json

//Jason syntax here 

// {
//     "name":"mudasir",
//     "coursename":"bca",
//     "price":"free",
//     "id":1234,
//     "loggedin":false,

// }

