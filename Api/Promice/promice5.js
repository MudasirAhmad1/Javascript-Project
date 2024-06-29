const promisefive=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Promise Five is Created");
        let error=true;
        if (!error) {
        resolve({username:"mudasir",password:"123"});    
        }
        else{
            reject("Error:Something Went wrong:")
        }
        
    },2000)
})
async function consumepromicefive() {
    try {
        const response= await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromicefive();