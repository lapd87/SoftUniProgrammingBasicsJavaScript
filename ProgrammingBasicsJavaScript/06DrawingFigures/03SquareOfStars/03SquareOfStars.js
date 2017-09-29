function squareStars([arg1]) {
    let n = Number(arg1);
    let rowText = "*" + " *".repeat(n - 1);

    for (let i = 1; i <= n; i++) {
        console.log(rowText);
    }
}

squareStars(["5"]);