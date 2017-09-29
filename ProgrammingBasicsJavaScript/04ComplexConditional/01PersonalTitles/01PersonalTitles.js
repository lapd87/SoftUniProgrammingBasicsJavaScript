function personalTitles([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2.toLowerCase();

    if (age < 16) {
        if (gender == "m") {
            console.log("Master");
        }
        else {
            console.log("Miss");
        }
    }
    else {
        if (gender == "m") {
            console.log("Mr.");
        }
        else {
            console.log("Ms.");
        }
    }
}

personalTitles(["17", "m"]);