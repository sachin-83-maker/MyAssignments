let name = "Aman Verma";
let vowels=0;
for(let i=0;i<name.length;i++)

{
    if(name[i]=='A' || name[i]=='a'|| name[i]== 'E' || name[i]=='e'|| name[i]=='O'||name[i]=='o'||name[i]=='U'||name[i]=='u'||name[i]=='I'||name[i]=='i')
    {
        vowels++;
        console.log(`vowel is ${name[i]}`)
    }   

}
 console.log(`no of vowels are ${vowels}`)