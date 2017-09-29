function oddEvenSum(args) {
    let n = Number(args[0]);

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i+=2) {
        oddSum += Number(args[i]);
    }
    for (let i = 2; i <= n; i+=2) {
        evenSum += Number(args[i]);
    }

    if (oddSum == evenSum) {
        console.log("Yes");
        console.log("Sum = " + oddSum);
    }
    else {
        console.log("No");
        console.log("Diff = " + Math.abs(oddSum - evenSum));
    }
}

oddEvenSum(["4", "10", "50", "60", "20"]);