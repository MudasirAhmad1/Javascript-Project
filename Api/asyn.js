async function getalluser() {
    try {
        const response=await fetch('https://api.github.com/users/hiteshchoudhary');
        console.log(response);
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log("E.Something went wrong",errors);
    }
}
getalluser();