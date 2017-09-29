function shop([arg1, arg2, arg3]) {
    let fruit = arg1.toLowerCase();
    let day = arg2.toLowerCase();
    let quantity = Number(arg3);

    if (day == "saturday" || day == "sunday") {
        switch (fruit) {
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.6;
                break;
            case "kiwi":
                price = 3.0;
                break;
            case "pineapple":
                price = 5.6;
                break;
            case "grapes":
                price = 4.2;
                break;
            default:
                console.log("error");
                return;
        }
    } else if (day == "monday" ||
        day == "tuesday" ||
        day == "wednesday" ||
        day == "thursday" ||
        day == "friday") {
        switch (fruit) {
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.2;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.7;
                break;
            case "pineapple":
                price = 5.5;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                console.log("error");
                return;
        }
    }
    else {
        console.log("error");
        return;
    }
    console.log(price * quantity);
}

shop(["tomato", "Monday", "0.5"])