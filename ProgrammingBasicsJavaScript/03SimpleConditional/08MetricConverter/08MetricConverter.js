function metricConverter([arg1, arg2, arg3]) {
    let distance = Number(arg1);
    let inputUnit = arg2.toUpperCase();
    let outputUnit = arg3.toUpperCase();

    let convertorArray = {};
    convertorArray.MM = 1000;
    convertorArray.CM = 100;
    convertorArray.MI = 0.000621371192;
    convertorArray.IN = 39.3700787;
    convertorArray.KM = 0.001;
    convertorArray.FT = 3.2808399;
    convertorArray.YD = 1.0936133;
    convertorArray.M = 1;

    let result = distance / convertorArray[inputUnit] * convertorArray[outputUnit];

    console.log(result.toFixed(8));
}

metricConverter(["450", "yd", "km"]);