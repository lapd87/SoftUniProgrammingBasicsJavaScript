function tradeComissions([args1, args2]) {
    let city = args1.toLowerCase();
    let sales = Number(args2);

    let sofiaCom = [0.05, 0.07, 0.08, 0.12];
    let varnaCom = [0.045, 0.075, 0.10, 0.13];
    let plovdivCom = [0.055, 0.08, 0.12, 0.145];

    let comIndex = -1;
    let comission = 0;

    if (sales<0) {
        console.log("error");
        return;
    }
    else if (sales <=500) {
        comIndex = 0;
    }
    else if (sales <=1000) {
        comIndex = 1;
    }
    else if (sales <=10000) {
        comIndex = 2;
    }
    else {
        comIndex = 3;
    }

    switch (city) {
        case "sofia": comission = sofiaCom[comIndex]; break;
        case "varna": comission = varnaCom[comIndex];break;
        case "plovdiv": comission = plovdivCom[comIndex]; break;
        default: console.log("error");
            return;
    }

    console.log((sales * comission).toFixed(2));

}

tradeComissions(["Varna", "3874.50"]);