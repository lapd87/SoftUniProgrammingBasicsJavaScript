function numToText([arg1]) {

    let inputNum = Number(arg1);

    let toNineteen = new Array(
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen");

    let toNinety = new Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", "one hundred");


    if (inputNum<0 || inputNum>100) {
        console.log("invalid number")
    }
    else if (inputNum < 20) {
        console.log(toNineteen[inputNum]);
    }
    else if (inputNum % 10==0) {
        console.log(toNinety[Math.floor(inputNum / 10)]);
    }
    else {
        console.log(toNinety[Math.floor(inputNum / 10)] + " " + toNineteen[inputNum % 10]);
    }
}

numToText(["99"]);