function enterEven(args) {
    let i = 0;
    let num = 0;

    while (true) {
        console.log("Enter even number: ");

        num = Number(args[i]);

        if (isNaN(num)) {
            console.log("Invalid number!");
        }
        else {
            if (num % 2 != 0) {
                console.log("The number is not even: ");
            }
            else {
                console.log("Even number entered: " + num);
                break;
            }
        }
        i++;
    }
}

enterEven(["35", "sgds", "12.84", "34"])