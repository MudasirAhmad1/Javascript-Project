let i=1;
for(i=1;i<=10;i++)
/* 
1.first i will be assign 1 i=1;
2.2nd will check condition i<=10;
3.then it will print console.log(i).
4.Now i will get increment i++;
5. then check condition again 
*/
{
    //console.log(i);
    if (i==5) {
        //console.log(`${i} is best number`);
    }
}


for(i=0;i<=10;i++)
{
    for(j=0;j<=10;j++)
    {
        //console.log(j);
    }
    //console.log(i);
}

// for array 

let myArray=["shakal","tariq","Mahakal"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
}
//console.log(myArray);

//break and continue

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index==5) {
        console.log(`lucky number${index}`);
        break //loop stop at break 5 print then loop stop 
    }
    console.log(index);
}

// continue is used to skip 1 time like here 5 skip then continue working

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index==5) {
        console.log(`lucky number${index}`);
        continue //one time skip
    }
    console.log(index);
}
