function equalPairs(args) {
    let n = Number(args[0]);

    let maxDiff = Number.NEGATIVE_INFINITY;
    let sumPrev = 0;
    let sumNow = 0;

    for (let i = 1; i <= 2*n; i+=2)
    {
        sumPrev = sumNow;
        sumNow = 0;

        let a = Number(args[i]);
        let b = Number(args[i+1]);

        sumNow = a + b;
        if (maxDiff < Math.abs(sumNow - sumPrev) && i > 1) {
            maxDiff = Math.abs(sumNow - sumPrev);
        }
    }

    if (n == 1 || sumPrev == sumNow) {
        console.log("Yes, value="+ sumNow);
    }
    else {
        console.log("No, maxdiff="+ maxDiff);
    }

}

equalPairs(["2", "-1", "0", "0", "-1"]);
