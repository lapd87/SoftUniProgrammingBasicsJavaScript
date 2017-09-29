function PowersOfTwo([arg1]) {
    let n = Number(arg1);

    for (let i = 0; i <= n; i++) {
        console.log(Math.pow(2, i));
    }
}

PowersOfTwo(["5"]);