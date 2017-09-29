function numberTable([arg1]) {
    let n = Number(arg1);

    let rowText = "";

    for (let row = 0; row < n; row++) {
        for (let col = 1; col <= n; col++) {
            if (row + col > n) {
                rowText += 2 * n - row - col + " ";
            } else {
                rowText += row + col + " ";
            }
        }
        console.log(rowText);
        rowText = "";
    }
}

numberTable(["5"]);