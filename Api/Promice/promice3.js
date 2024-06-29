const promisethree=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Promise Three is Created");
        let error=false;
        if (!error) {
        resolve({username:"mudasir",password:"123"});    
        }
        else{
            reject("Error:Something Went wrong:")
        }
        
    },2000)
})
promisethree.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Promise Completed:");
})