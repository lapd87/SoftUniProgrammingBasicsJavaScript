function fibonacci([arg1]) {
    let n = Number(arg1);

    let firstNum = 0;
    let secondNum = 1;

    for (let i = 1; i <= n; i++) {
        let newNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = newNum;
    }
    console.log(secondNum);
}

fibonacci(["10"]);