function oddEvenSum(args) {
    let n = Number(args[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i += 2) {
        oddSum += Number(args[i]);
        if (oddMax < Number(args[i])) {
            oddMax = Number(args[i]);
        }
        if (oddMin > Number(args[i])) {
            oddMin = Number(args[i]);
        }
    }
    for (let i = 2; i <= n; i += 2) {
        evenSum += Number(args[i]);
        if (evenMax < Number(args[i])) {
            evenMax = Number(args[i]);
        }
        if (evenMin > Number(args[i])) {
            evenMin = Number(args[i]);
        }
    }

    if (oddMin == Number.POSITIVE_INFINITY) {
        oddMin = "No";
    }
    if (oddMax == Number.NEGATIVE_INFINITY) {
        oddMax = "No";
    }
    if (evenMin == Number.POSITIVE_INFINITY) {
        evenMin = "No";
    }
    if (evenMax == Number.NEGATIVE_INFINITY) {
        evenMax = "No";
    }

    console.log("OddSum=" + oddSum);
    console.log("OddMin=" + oddMin);
    console.log("OddMax=" + oddMax);
    console.log("EvenSum=" + evenSum);
    console.log("EvenMin=" + evenMin);
    console.log("EvenMax=" + evenMax);

}

oddEvenSum(["6", "2", "3", "5", "4", "2", "1"]);