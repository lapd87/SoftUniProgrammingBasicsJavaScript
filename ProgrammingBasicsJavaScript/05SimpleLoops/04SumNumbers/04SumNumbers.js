function sumNum(args) {
    let n = Number(args[0]);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Number(args[i]);
    }
    console.log(sum);
}

sumNum(["2", "3", "50"]);