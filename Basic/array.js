/* The Array object, as with arrays in other programming languages, 
enables storing a collection of multiple items under a single variable name, 
and has members for performing common array operations.

1. Array can contain araay in array,also contain boolean in array
2. Array are resixable we vcan add number after making array
3. Array cannot accessed through string only through indexing
4 Zero beased indexing.
5.When use copy operation in array it creates shallow copy 

Shallow: it copies the object and all its properties, but any nested objects or 
arrays will still reference the same memory location as the original object.
It will store in stack so cannot change orignial if we cahnge in copy

Deep Copy: A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, 
it will not affect the original object.

Or we can say it stores in heap memory
*/
// const name =new Array('aabid','aziz','Mudasir')
// console.log(name);
// const name1 =[1,2,3,4,5,[1,2,3,45,55]] //Array inside array
// console.log(typeof(name1)); //object as type of return object

// console.log(name.concat(name1));

/* Another way of declare array */

// const array1 =new Array(1,2,3,4)
// // console.log(array1); //print all array
// // console.log(array1[2]); // access array through indexing

// /*array Methods */
// array1.push(9); //push the number in the array
// array1.push(10); //push the number in the array
// array1.pop(); //pop the number in the array
// array1.unshift(1);//insert number in the beginning it shift all numbers
// array1.shift(); //remove the element used for unshift can remove other element also

// console.log(array1.includes(1));// check number is present in the list
// console.log(array1.indexOf(2)); //check index of 

// console.log(array1);
// const newarray =array1.join()

// //console.log(array1.join()); //convert array to string you can check by using typeof
// console.log(typeof newarray); //type of shows string

const mynew1=[1,2,3,4,5,6]
console.log(mynew1);
const mynew2=mynew1
console.log(mynew2);

/* The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
where start and end represent the index of items in that array. 
The original array will not be modified.
*/

// console.log("New 1",mynew1.slice(1,5));

// /* The splice() method of Array instances changes the contents of an array by removing 
// or replacing existing elements and/or adding new elements in place */

// console.log(mynew2.splice(0,5));
// console.log(mynew1);
// console.log(mynew2);


