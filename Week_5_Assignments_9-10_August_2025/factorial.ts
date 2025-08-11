function factorial(n: number):number
{
 if (n<0)
 {
     console.log("Fibonacci is not definedor negative numbers");
    return NaN;
 }
 else 
 //calculate factorial of a positive 
{
 let fact=1
 for(let i=1; i<=n;i++)
 {
    fact=fact*i;
 }

 return fact;
}
}


console.log("Factorial of 5 is", factorial(5));  // 120
    console.log("Factorial of 0 is", factorial(0));  // 1
    console.log("Factorial of 7 is", factorial(7));  // 5040
    console.log("Factorial of -3 is", factorial(-3)); // Error  