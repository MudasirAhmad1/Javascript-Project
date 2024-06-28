//console.log(Date().toString);
let mydate = new Date();
//console.log(mydate.toString());
console.log(mydate.getMilliseconds());

//let mynewdate =new Date(2024,1,28); //Enter the date like this and get date

let mynewdate =new Date("02,28,2024");
console.log(mynewdate.toDateString());

let mynewdate1 =Date.now();
console.log(mynewdate1); //Get Date in Miliseconds

console.log(mynewdate.getTime()); //Get date in miliseconds

console.log(Math.floor(Date.now()/1000));// convert to seconds interivew question

console.log(mynewdate.getMonth().toString());

console.log(`The day is ${mynewdate.getDay()} and the month is ${mynewdate.getMonth()} and the year is ${mynewdate.getFullYear()} `);

/* Another method */

mynewdate.toLocaleString('default',{
    weekday:"long"
})

//remberthis: