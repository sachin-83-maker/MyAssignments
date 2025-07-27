function getUserData(callBack)
{
setTimeout(function()
{

console.log("This message is delayed by 3 seconds")
callBack();
},3000)

}
function callBack()
{
    console.log("call back function")
}

getUserData(callBack)
