function sunglasses([arg1]) {
    let n = Number(arg1);
    let rowText = "";

    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));

    for (let rows = 1; rows <= n - 2; rows++) {

        rowText += "*" + "/".repeat(2 * n - 2) + "*";

        if (rows == Math.floor((n - 1) / 2)) {
            rowText += "|".repeat(n);
        } else {
            rowText += " ".repeat(n);
        }

        console.log(rowText + "*" + "/".repeat(2 * n - 2) + "*");
        rowText = "";
    }

    console.log("*".repeat(2 * n) + " ".repeat(n) + "*".repeat(2 * n));
}

sunglasses(["4"]);
