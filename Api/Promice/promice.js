const promise=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Promise created");
        resolve();    
    },1000)
    
});
promise.then(function () {
    console.log("Promise completed");
})

// Promise second//
new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Promise Created from 2nd:");
        resolve();
    },1000)
}).then(function () {
    console.log("Promise Completed From 2nd ");
})
