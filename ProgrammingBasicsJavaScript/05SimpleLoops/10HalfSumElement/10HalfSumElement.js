function halfSum(args) {
    let n = Number(args[0]);

    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNum = Number(args[i]);

        if (currentNum > max) {
            max = currentNum;
        }

        sum += currentNum;
    }

    if (sum-max == max) {
        console.log("Yes");
        console.log("Sum = " + max);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(sum - max - max));
    }
}

halfSum(["3", "5", "5", "1"])