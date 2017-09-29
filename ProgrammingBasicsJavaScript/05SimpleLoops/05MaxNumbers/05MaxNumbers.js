function maxNum(args) {
    let n = Number(args[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum>max) {
            max = currentNum
        }
    }
    console.log(max);
}

maxNum(["2", "3", "50"]);