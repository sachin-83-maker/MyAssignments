for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
/* using repeat method
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
} */