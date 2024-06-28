// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3=array1.concat(array2)// Array to concatenate
// console.log(array3);

//The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
 //const num1= new String("Muzamil");
// console.log(num1.charAt(0)); //Show u the 0 location what is contain like here it contain "M" 

// console.log(num1.indexOf("M")); //show u the location where "M" is located

//console.log(num1.charCodeAt(6));
//The charCodeAt() method of String values returns an integer between 0 and 65535 
//representing the UTF-16 code unit at the given index.

// console.log(num1.codePointAt(6));

// Difference Between charCodeAt() and codePointAt()
// charCodeAt() is UTF-16, codePointAt() is Unicode.

// charCodeAt() returns a number between 0 and 65535.

// Both methods return an integer representing the UTF-16 code of a character, 
// but only codePointAt() can return the full value of a Unicode value greather 0xFFFF (65535).

/*The endsWith() method of String values determines whether a string ends with the characters of this string,
returning true or false as appropriate.*/

// const name = "Muzamil is best"
// console.log(name.endsWith("is")); //Not ends with is so it is false

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!')); //It ends with true because best match ends
// Expected output: true

/* The includes() method of Array instances determines 
whether an array includes a certain value among its entries, returning true or false as appropriate.
// Check the value is present in numbers or in array or in sentence//
*/
// const array1 = [1, 2, 3]; 
 const name1="welcome to wwe"

// console.log(array1.includes(5)); //number is present is the array and answer is in boolean
// console.log(name1.includes("wwe")); // Wwe is present in the sentence

/* The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. */

// console.log(name1.lastIndexOf("wwe"));

/*The localeCompare() method of String values returns a number indicating whether this string comes before,
 or after, or is the same as the given string in sort order. */

//  const a = 'ab'; // With accents, lowercase
// const b = 'cd'; // No accents, uppercase

// console.log(a.localeCompare(b));
// console.log(b.localeCompare(a));
// // Expected output: 1
// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

/* The substring() method of String values returns the part of this string from the start index up to and excluding the end index, 
or to the end of the string if no end index is supplied. */

//const name ="MUdasir"// 
//console.log(name.substring(1,4)); //output uda ignore m and and last digits after 4 ignore last value

/* The toLocaleLowerCase() method of String values returns this string converted to lower case, 
according to any locale-specific case mappings. */

//console.log(name.toLocaleLowerCase("en-us"));

//const mudasir= "google"

//console.log(mudasir.valueOf("mudasir"));

/* The trim() method of String values removes whitespace from both ends of this string and returns a new string,
 without modifying the original string.
To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd(). */

/*
const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim()); //remove space string
// Expected output: "Hello world!";

*/

// const url ="www.google.com@gmail@.com"
// console.log(url.replace("@","#"));
// console.log(url.includes("google"));

// //break the sentence here i break using '.' 
// console.log(url.split("."));

/* Slice is another where you can use negative value also, It will start from reverse not work on substring*/
const slicestring ="Welcome"
console.log(slicestring.slice(0,4));
console.log(slicestring.slice(-8,4));