function bonusPoints([arg1]) {
    let points = Number(arg1);

    let bonus;

    if (points <= 100) {
        bonus = 5;
    }
    else if (points <= 1000) {
        bonus = 0.2 * points;
    }
    else {
        bonus = 0.1 * points;
    }

    if (points % 2 == 0) {
        bonus += 1;
    }
    if (points % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + points);
}

bonusPoints(["17"])