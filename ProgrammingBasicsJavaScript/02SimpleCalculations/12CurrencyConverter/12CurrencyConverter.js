function currencyConvertor([arg1, arg2, arg3]) {
    let amount = Number(arg1);
    let inputCurrency = arg2.toUpperCase();
    let outputCurrency = arg3.toUpperCase();

    let associativeArray = {};
    associativeArray.BGN = 1;
    associativeArray.USD = 1.79549;
    associativeArray.EUR = 1.95583;
    associativeArray.GBP = 2.53405;

    let result = amount * associativeArray[`${inputCurrency}`] / associativeArray[`${outputCurrency}`];

    console.log(Math.round(result * 100) / 100);

}

currencyConvertor(["150.35", "usd", "eur"]);