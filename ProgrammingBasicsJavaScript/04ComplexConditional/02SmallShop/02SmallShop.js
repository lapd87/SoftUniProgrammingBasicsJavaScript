function shop([arg1, arg2, arg3]) {
    let city = arg2.toLowerCase();
    let product = arg1.toLowerCase();
    let quantity = Number(arg3);

    let cityProduct = city + product;
    let price = 0;

    switch (cityProduct) {
        case "sofiacoffee":
            price = 0.5;
            break;
        case "sofiawater":
            price = 0.8;
            break;
        case "sofiabeer":
            price = 1.2;
            break;
        case "sofiasweets":
            price = 1.45;
            break;
        case "sofiapeanuts":
            price = 1.6;
            break;
        case "plovdivcoffee":
            price = 0.4;
            break;
        case "plovdivwater":
        case "varnawater":
            price = 0.7;
            break;
        case "plovdivbeer":
            price = 1.15;
            break;
        case "plovdivsweets":
            price = 1.30;
            break;
        case "plovdivpeanuts":
            price = 1.50;
            break;
        case "varnacoffee":
            price = 0.45;
            break;
        case "varnabeer":
            price = 1.1;
            break;
        case "varnasweets":
            price = 1.35;
            break;
        case "varnapeanuts":
            price = 1.55;
            break;
        default:
            price = 0.0;
    }

    console.log(price * quantity);
}

shop(["beer", "sofia", "6"]);