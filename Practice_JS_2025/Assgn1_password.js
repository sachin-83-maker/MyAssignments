let password = "@123s"
password = password.trim();
if (password.length >= 8 && !password.toLowerCase().includes("password")) {
    console.log("Password accepted");
} else {
    console.log("Weak password");
}