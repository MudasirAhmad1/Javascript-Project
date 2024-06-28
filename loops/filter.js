const array1=["mudasir","muzamil","aabid"];

const mud=array1.forEach( function (val) {
    //console.log(val);
})

//console.log(mud); //its not return anything only undefined for each doest not return..


/*
If we have to return we use filter to return it

*/
const array=[1,2,3,4,5,6]

//const sam=array.filter((item)=>item>2) //this will return automatically no need to write return implicit return
// const sam=array.filter((item)=>
// {
//     item>2}  //if u return like this then u will get empty array[] u have to write return
//     )

    const sam=array.filter((item)=>
    {
        return item>2
    }
        )
console.log(sam);

//in same u will get return value


// Here we return the number using for each loop

const newarray=[]

array.forEach( (num)=>
{
if(num>2)
{
    newarray.push(num)
}
})
console.log(newarray);

// using map 
const numbers=[1,2,3,4,5,6,7,8,9,10]

const newnumber=numbers.map((num)=>num+10)
console.log(newnumber);

//filter can use condition 
//but map does not use any condition

//chanining here means adding map().map().filter() like this methid together

const newnumber1=numbers.map((num)=>num+11)
                        .map((num)=>num+11)
                        .map((num)=>num+11)
                        .filter((num)=>num>=36)
console.log(newnumber1);

// reduce used in shopping cart

const myNum=[1,2,3]

const total =myNum.reduce(function (acc,currval) {//acc=acc+currval
    return acc+currval
},0)   //-- 0 is used first value of accumlutaor its starting,u can use other too.
console.log(total);

//shooping cart 

const shoppingcart=[
    {
        itemName:"jscourse",
        price:99
    },
    {
        itemName:"jscourse",
        price:99
    },{
        itemName:"jscourse",
        price:99
    },{
        itemName:"jscourse",
        price:99
    }
]
const totals=shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(totals);