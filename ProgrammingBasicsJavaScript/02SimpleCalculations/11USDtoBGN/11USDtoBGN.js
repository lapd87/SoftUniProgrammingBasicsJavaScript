function USDtoBGN([arg1]) {
    let usd = Number(arg1);

    let bgn = usd * 1.79549;

    console.log(Math.round(bgn*100)/100);
}

USDtoBGN(["12.5"])