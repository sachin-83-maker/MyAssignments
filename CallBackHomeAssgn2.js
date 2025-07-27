let browser = "Chrome";
function checkBrowserVersion(callback)
{
setTimeout(()=>
{
  console.log("This message is delayed by 2 seconds")
  callBack(browser);
}, 2000);
}
function callBack(browserVersion)
{
    console.log("The browesr version is" +browserVersion)
}
checkBrowserVersion(callBack);