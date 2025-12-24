let prices = [250, 99, 499, 1200, 75]
let totalAmount=0
for(let i=0;i<prices.length;i++)
{
    console.log(`each items prices are: ${prices[i]}`)
    totalAmount=totalAmount+prices[i]
}
 console.log(`final total amount is: ${totalAmount}`)