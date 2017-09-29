function prime([arg1]) {
    let num = Number(arg1);
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
    }

    if (isPrime) {
        console.log("Prime");
    }
    else {
        console.log("Not Prime");
    }
}

prime(["149"])