/* Switch case */

const month=1

switch (month) {
    case 1:
        console.log("January");
        break; //if remove break then case1 and case2 will run in case2 is break so it will break 
        //if no break in all then it will continue run till default
        //default will not run //rember interivew question
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("January");
        break;
    case 4:
        console.log("January");
        break;

    default:  //no one execute then it will execute
        break;
}

const days="mon"
switch (days) {
    case "mon":
        console.log("monday");
        break;
            case "tue":
                console.log("tuedayday");
                break;
    default:
        break;
}
