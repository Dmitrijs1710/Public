let i = 0;
while (i < 100) {
    if ((i = prompt("enter a number")) >= 100) {
        alert("thank you");
        break;
    } else if (i == null) {
        alert("abort");
        break;
    }
}