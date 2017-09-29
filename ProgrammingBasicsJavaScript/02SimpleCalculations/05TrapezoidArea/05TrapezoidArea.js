function trapezoidArea([arg1, arg2, arg3]) {
    let upperSide = Number(arg1);
    let bottomSide = Number(arg2);
    let height = Number(arg3);

    console.log((upperSide + bottomSide) * height / 2);
}

trapezoidArea(["8", "13", "7"]);