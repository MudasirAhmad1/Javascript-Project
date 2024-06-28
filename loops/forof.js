let arr=['1','2','3','4','5']

for (const i of arr) {  // const i you can use anything in place of i
    // arr is used *of array we have declare...
    //console.log(i);
}
let array="welcome"

for (const i of array) {
    //console.log(i);
}

/*maps//
The Map object holds key-value pairs and remembers the original 
insertion order of the keys. 
Any value (both objects and primitive values) may be used 
as either a key or a value.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.


1. Unique values only goes in map
2. jis order mai hoga isi order mai hoga

const map = new Map()
map.set('IN','INDIA')
map.set('IND','INDONESIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN','INDIA') //this will not show because it take only unique values..

//console.log(map);

for (const key of map) {
    //console.log(key); // it will print in array
}

//array destructure

for (const [key,value] of map) {
    //console.log(key,":>",value);
}

// for object it will will show error..

myObject={
game1:"nfs",
game2:"gta"

}

for (const [key,value] of myObject) {
    //console.log(key,value);
}
//output myobject is not iterable. there are many methods to iletrate object

//for in loop will work on object not on map because map says it is not ilteratable
*/
myObject1={

    js:"javascript",
    c:"c programing",
    go: "golang"
}
for (const key in myObject1) {
    //console.log(myObject1[key]);
    //console.log(`${key} and the value is ${myObject1[key]}`);
}
// array

let arr1=["erty","iuytr","hgvgggj","jgvgjjg","hgvghvg","vhjvjhv"]
for (const key in arr1) {
   // console.log(key);//output 0,1,2,3,4,5 print key in other loop forof u will print values
    console.log(arr1[key]); //output u will get values...
    }

    //for in loop we cannot use in map because its not iletratble