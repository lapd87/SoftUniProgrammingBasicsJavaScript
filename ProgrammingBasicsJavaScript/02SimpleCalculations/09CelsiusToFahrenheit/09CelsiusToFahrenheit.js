function celsiusToFahrenheit([arg1]) {
    let celsius = Number(arg1);

    let fahrenheit = celsius * 9 / 5 + 32;

    console.log(fahrenheit.toFixed(2));
}

celsiusToFahrenheit(["-5.5"]);