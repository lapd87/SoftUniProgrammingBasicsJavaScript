function numberPyramid([arg1]) {
    let n = Number(arg1);

    let num = 1;
    let rowText = "";

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            rowText += num + " ";
            num++;
            if (num > n) {
                break;
            }
        }
        console.log(rowText);
        rowText = "";
        if (num > n) {
            break;
        }
    }
}

numberPyramid(["12"]);