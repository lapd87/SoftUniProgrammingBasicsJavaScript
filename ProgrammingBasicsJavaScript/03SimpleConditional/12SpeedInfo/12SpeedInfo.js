function speedInfo([arg1]) {
    let speed = Number(arg1);

    if (speed<=10) {
        console.log("slow");
    }
    else if (speed>1000) {
        console.log("extremely fast");
    }
    else if (speed > 150) {
        console.log("ultra fast");
    }
    else if (speed > 50) {
        console.log("fast");
    }
    else {
        console.log("average");
    }
}

speedInfo(["160"])