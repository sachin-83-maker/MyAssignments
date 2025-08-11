function fibonacci(n: number): number {
if (n < 0) {
throw new Error("Fibonacci is not definedor negative numbers");
 if (n === 0) return 0;
if (n === 1) return 1;
}
  let F0 = 0; // First Fibonacci number
let F1 = 1; // Second Fibonacci number

for (let i = 2; i <= n; i++) {
    const F2 = F0+F1;
F0 = F1;
      F1 = F2;
   }

   return F1;

}

// calculate fibnocci series for different no
console.log("Fibonacci(0):", fibonacci(0));  // 0
console.log("Fibonacci(1):", fibonacci(1));  // 1
console.log("Fibonacci(5):", fibonacci(5));  // 5
console.log("Fibonacci(10):", fibonacci(10)); // 55 
