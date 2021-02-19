let userName = prompt("who is there?");
if (userName == null) {
    alert("abort");
} else if (userName != "Admin") {
    alert("i don't know you");
} else {
    let passWord = prompt("password,please");
    if (passWord == null) {
        alert("abort");
    } else if (passWord != "Iamboss") {
        alert("i don't know you");
    } else {
        alert("Welcome");
    }
}