function equalNum([arg1, arg2, arg3]) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);

    if (num1==num2 && num2== num3) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}

equalNum(["0","1","0"])