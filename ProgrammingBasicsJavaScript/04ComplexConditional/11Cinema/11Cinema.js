function cinema([arg1, arg2, arg3]) {
    let projectionType = arg1.toLowerCase();
    let rows = Number(arg2);
    let columns = Number(arg3);

    let price = 0;

    switch (projectionType) {
        case "premiere": price = 12; break;
        case "normal": price = 7.50; break;
        case "discount": price = 5; break;
    }

    console.log((price * rows * columns).toFixed(2));
}

cinema(["Normal", "21", "13"]);