function factorial([arg1]) {
    let n = Number(arg1);
    let factorial = 1;

    for (let i = 1; i <=n; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

factorial(["10"]);