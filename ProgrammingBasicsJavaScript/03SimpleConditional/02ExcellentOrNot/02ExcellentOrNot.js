function excellentOrNot([arg1]) {
    let grade = Number(arg1);

    if (grade >= 5.5) {
        console.log("Excellent!")
    }
    else {
        console.log("Not excellent.")
    }
}

excellentOrNot(["5.49"]);