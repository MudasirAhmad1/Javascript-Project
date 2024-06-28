//The forEach() method of Array instances executes a provided function once for each array element.

const array = ['a', 'b', 'c'];

array.forEach((element) => console.log(element));

//normal function

const array1=["mudasir","muzamil","aabid"];

array1.forEach( function (val) {
    //console.log(val);
})
//arrow function

array1.forEach((item)=> {
    //console.log(item);
})

//if we have another function already decalre we can use that too in foreach

function mudasir(item) {
    //console.log(item);
}
//mudasir()

array1.forEach(mudasir) //here we use only refrence mudasir

// see what things are in for each loop index,value,and full array access

array1.forEach((item,index,arr)=> {
    console.log(item,index,arr);
})


// array contain lot of object so we have to access all data

const mycoding=[

    {
        languagename:"javascript",
        lanaguagefilename: "js"
    },
    {
        languagename:"javascript",
        lanaguagefilename: "js"
    },
    {
        languagename:"javascript",
        lanaguagefilename: "js"
    }
]

mycoding.forEach( (item)=>
{
    console.log(item); //here u print all the data in objects in simple way
console.log(item.languagename); // here u also print languagename only
console.log(item.lanaguagefilename); //here u print only language file name
}
)
