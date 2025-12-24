let str = "JalAj";
let revstr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
}

if (str.toLowerCase() === revstr.toLowerCase()) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
/* using while loop
let str = "jalaj";
let start = 0;
let end = str.length - 1;
let isPalindrome = true;

while (start < end) {
    if (str[start] !== str[end]) {
        isPalindrome = false;
        break;
    }
    start++;
    end--;
}

if (isPalindrome) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
} */

/* using reverse function
let str = "jalaj";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
} */