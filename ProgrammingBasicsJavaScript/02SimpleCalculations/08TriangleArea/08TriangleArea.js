function triangleArea([arg1, arg2]) {
    let side = Number(arg1);
    let height = Number(arg2);

    let area = side * height / 2;
    console.log(`Triangle area = ${area.toFixed(2)}`);
}

triangleArea(["1.23456","4.56789"])