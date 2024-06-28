const marvel_heros=["mudi","ahmad","muzamil"]
// //console.log(marvel_heros);

const local_heros=["muza","hoof","mumi"]
// //console.log(local_heros);

// marvel_heros.push(local_heros);// push array in another array and result will be array within array
// console.log(marvel_heros);

// const concat_array=marvel_heros.concat(local_heros); // all 2 array in one array ans store in new array
// console.log(concat_array);

// /* spread operator  */
// const newarray_spread =[...marvel_heros,...local_heros]// output [ 'mudi', 'ahmad', 'muzamil', 'muza', 'hoof', 'mumi' ] result in one array...
// /* in spread u can enter array as many as u want  */

// console.log(newarray_spread);

/*   */

// const another_array=[1,2,3,4,5,[6,7,[10,11]],8,9]
// console.log(another_array);
// const real_another=another_array.flat(Infinity) //you have to write depth of array how many array inside array here we write infinety so it will determine automatically.
// /* flat will remove all array inside array and make it one array  */
// console.log(real_another);

/* when u do datascrapping- when u select data from webpage and u will get in difffrent format so we have to make it array  to perform operations
like object,nodelist,string we do this 
*/
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"})); //not can covert intresting case //u have to write which u have to make keys,object

const score1=47;
const score2=100;
const score3=500;
console.log(Array.of(score1,score2,score3)); //covert to array

const hi="hello"
const hi1="welcome"
console.log(Array.of(hi,hi1));