function rectangleArea([arg1, arg2, arg3, arg4]) {
    let x1 = Number(arg1);
    let y1 = Number(arg2);
    let x2 = Number(arg3);
    let y2 = Number(arg4);

    let area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
    let perimeter = 2 * (Math.abs(x1 - x2) + Math.abs(y1 - y2));

    console.log(area);
    console.log(perimeter);
}

rectangleArea(["600.25", "500.75", "100.50", "-200.5"]);