function minNum(args) {
    let n = Number(args[0]);
    let min = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);
        if (currentNum < min) {
            min = currentNum
        }
    }
    console.log(min);
}

minNum(["2", "3", "50"]);