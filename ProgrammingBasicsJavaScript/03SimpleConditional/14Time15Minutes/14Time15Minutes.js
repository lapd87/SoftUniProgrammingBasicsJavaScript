function addMinutes([arg1, arg2]) {

    let hours = Number(arg1);
    let minutes = Number(arg2);

    let time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes+15);
    time.setSeconds(0);

    let hh = time.getHours();
    let mm = ("0" + time.getMinutes()).slice(-2);

    console.log(`${hh}:${mm}`);
}

addMinutes(["23", "59"]);