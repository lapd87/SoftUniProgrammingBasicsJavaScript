function triangleDollars([arg1]) {
    let n = Number(arg1);

    for (let i = 0; i < n; i++) {
        console.log("$" + " $".repeat(i));
    }
}

triangleDollars(["5"]);