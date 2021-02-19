let tillNumber = +prompt("enter a number");
once:
    for (let i = 2; i < tillNumber; i++) {
        for (let g = 2; g < i; g++) {
            if (i % g == 0) {
                continue once;
            }
        }
        alert(i);
    }