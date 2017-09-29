function diamond([arg1]) {
    let n = Number(arg1);

    let rowCount = Math.floor((n + 1) / 2 )* 2 - 1;

    let rowText = ""

    for (let row = 0; row < rowCount; row++) {
        let outerDash = Math.abs(Math.floor((n - 1) / 2) - row);

        rowText += "-".repeat(outerDash) + "*";

        if (row == 0 || row == rowCount - 1) {
            if (n % 2 == 0) {
                rowText += "*";
            }
        } else {
            let innerDash = n - 2 * outerDash - 2;

            rowText += "-".repeat(innerDash) + "*";
        }
        console.log(rowText + "-".repeat(outerDash));
        rowText = "";
    }
}

diamond(["5"]);