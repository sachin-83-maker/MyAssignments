const browserName="chrome"

function getBrowserName() {
    if (browserName === "chrome") {
      let browserName = "Google Chrome Browser1";
    console.log("Inside if block: " + browserName);
  }
  if (browserName === "chrome") {
    let browserName = "Google Chrome Browser2";
    console.log("Outside if block: " + browserName);
  }
}
  getBrowserName();