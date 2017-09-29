function point([arg1, arg2, arg3]) {
    let h = Number(arg1);
    let x = Number(arg2);
    let y = Number(arg3);

    if ((x >= 0 && x <= 3 * h && y >= 0 && y <= h)
        || (x >= h && x <= 2 * h && y >= h && y <= 4 * h)) {
        if ((x > 0 && x < 3 * h && y > 0 && y < h)
            || (x > h && x < 2 * h && y > h && y < 4 * h)) {
            console.log("inside");
        }
        else {
            if (x > h && x < 2 * h && y == h) {
                console.log("inside");
            }
            else {
                console.log("border");
            }
        }
    }
    else {
        console.log("outside");
    }
}

point(["2", "0", "6"]);