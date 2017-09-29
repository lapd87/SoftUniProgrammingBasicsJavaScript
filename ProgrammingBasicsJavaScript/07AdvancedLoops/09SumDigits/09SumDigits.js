function sumDigits([arg1]) {
    let num = Number(arg1);

    let sum = 0;

    while (num>=1) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    console.log(sum);
}

sumDigits(["5634"]);