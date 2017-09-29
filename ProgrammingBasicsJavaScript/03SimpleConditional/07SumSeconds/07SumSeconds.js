function sumSeconds([arg1, arg2, arg3]) {
    let sec1 = Number(arg1);
    let sec2 = Number(arg2);
    let sec3 = Number(arg3);

    let totalSec = sec1 + sec2 + sec3;

    let m = Math.floor(totalSec / 60);
    let ss = ("0" + totalSec % 60).slice(-2);

    console.log(`${m}:${ss}`);
}

sumSeconds(["22", "7", "34"]);