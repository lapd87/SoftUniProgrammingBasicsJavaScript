function house([arg1]) {
    let n = Number(arg1);
    let rowText = "";

    for (let upperRows = 0; upperRows < Math.floor((n + 1) / 2); upperRows++) {

        let stars = 1;

        if (n % 2 == 0) {
            stars = 2;
        }

        console.log("-".repeat((n - stars - upperRows * 2) / 2) +
            "*".repeat(stars + upperRows * 2) +
            "-".repeat((n - stars - upperRows * 2) / 2));
    }

    for (let bottomRows = 1; bottomRows <= n / 2; bottomRows++) {
        console.log("|" + "*".repeat( n - 2) + "|");
    }
}

house(["5"]);