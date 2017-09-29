function figureaArea([arg1,arg2,arg3]) {
    let figureType = arg1.toLowerCase();
    let sideRadius = Number(arg2);
    let sideHeight = Number(arg3);

    if (figureType == "square") {
        console.log((sideRadius * sideRadius).toFixed(3));
    }
    else if (figureType == "rectangle") {
        console.log((sideRadius * sideHeight).toFixed(3));
    }
    else if (figureType == "circle") {
        console.log((Math.PI * sideRadius * sideRadius).toFixed(3));
    }
    else if (figureType=="triangle") {
        console.log((sideRadius * sideHeight / 2).toFixed(3));
    }
}

figureaArea(["square","5"])