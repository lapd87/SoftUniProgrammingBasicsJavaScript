function num1to9toText([arg1]) {
    let num = Number(arg1);

    switch (num) {
        case 1:
            console.log("one"); break;
        case 2:
            console.log("two"); break;
        case 3:
            console.log("three"); break;
        case 4:
            console.log("four"); break;
        case 5:
            console.log("five"); break;
        case 6:
            console.log("six"); break;
        case 7:
            console.log("seven"); break;
        case 8:
            console.log("eight"); break;
        case 9:
            console.log("nine"); break;

        default:
            console.log("number too big"); break;

    }
}

num1to9toText(["5"])