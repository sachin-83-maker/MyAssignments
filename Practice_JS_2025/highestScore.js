let scores = [67, 89, 45, 99, 76];
max=scores[0]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]>max)
        max=scores[i]
}
console.log(`max number is: ${max}`)