function guessPass([arg1]) {
    let input = arg1;
    let pass = "s3cr3t!P@ssw0rd";

    if (input == pass) {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!")
    }
}

guessPass(["s3cr3t!P@ssw0rd"]);