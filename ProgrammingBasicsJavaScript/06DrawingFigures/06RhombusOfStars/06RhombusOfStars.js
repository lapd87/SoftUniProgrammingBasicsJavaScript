function rhombusStars([arg1]) {
    let n = Number(arg1);

    for (let upperRows = 0; upperRows < n; upperRows++) {
        console.log(" ".repeat(n - upperRows - 1) +
            "*" + " *".repeat(upperRows));
    }
    for (let bottomRows = 1; bottomRows < n; bottomRows++) {
        console.log(" ".repeat(bottomRows) +
            "*" + " *".repeat(n - 1 - bottomRows));
    }
}

rhombusStars(["4"]);