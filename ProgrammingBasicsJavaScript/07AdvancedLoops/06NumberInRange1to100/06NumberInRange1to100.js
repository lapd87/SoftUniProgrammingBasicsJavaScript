function numberInRange(args) {
    let i = 0;
    let num = Number(args[i]);

    while (num < 1 || num > 100) {
        console.log("Invalid number!");
        i++;
        num = Number(args[i]);
    }
    console.log("The number is: " + num);
}

numberInRange(["105"]);