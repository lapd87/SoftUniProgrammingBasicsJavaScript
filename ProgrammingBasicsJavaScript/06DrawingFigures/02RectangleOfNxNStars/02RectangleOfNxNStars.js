function rectangleStars([arg1]) {
    let n = Number(arg1);
    let rowText = "*".repeat(n)

    for (let i = 1; i <= n; i++) {
        console.log(rowText)
    }
}

rectangleStars(["5"]);