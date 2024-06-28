/* 

1. Immediate inovke function
2. Protect from polluting for global.
*/

(function chai() {
    console.log("DB Connected");
})();  // If 2nd function then use ";" colon

/* Using Arrow function here */

(function (){
    console.log("DB Connected Two");
    //name if function
})(); 

((name)=> {
    console.log(`DB Connected Two ${name}`);
})("hitesh") //() this is used in iff function to call same as name()