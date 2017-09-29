function sequence([arg1]) {
    let n = Number(arg1);

    for (let i = 1; i <= n; i = 2 * i + 1) {
        console.log(i);
    }
}

sequence(["31"]);