function checkNumberType(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumberType(10));  
console.log(checkNumberType(-5));   
console.log(checkNumberType(0));