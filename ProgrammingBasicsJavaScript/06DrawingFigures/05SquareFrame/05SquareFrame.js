function squareFrame([arg1]) {
    let n = Number(arg1);

    console.log("+ " + "- ".repeat(n - 2) + "+");

    for (var i = 2; i < n; i++) {
        console.log("| " + "- ".repeat(n - 2) + "|");
    }
    console.log("+ " + "- ".repeat(n - 2) + "+");
}

squareFrame(["5"]);