function christmasTree([arg1]) {
    let n = Number(arg1);
    let rowText = "";

    for (let rows = 0; rows <= n; rows++) {
        rowText += " ".repeat(n - rows) +
            "*".repeat(rows);
        if (rows == 0) {
            rowText += (" |");
        } else {
            rowText += (" | ");
        }
        console.log(rowText + "*".repeat(rows));
        rowText = "";
    }
}

christmasTree(["4"]);