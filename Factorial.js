function factorial(n) {
    var result = n;

    if ((n < 0) || (n > 12)) throw RangeError();

    if (n == 0) {
        return 1;
    }

    while (n > 1) {
        var result = result * (n - 1);
        n--;
    }
    return result;
}

console.log(factorial(-12));