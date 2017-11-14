function longestConsec(strarr, k) {

    let result = "",
        combo = "",
        final = "",
        numArr = [];

    let newArr = strarr.map(function (a, b) {
        for (var pos = b; pos < (k + b); pos++) {
            if (strarr[pos] == undefined) {
                break;
            } else {
                result += strarr[pos];
            }
        }
        combo = result;
        result = "";
        return combo;
    });

    for (var x = 0; x < newArr.length; x++) {
        numArr[x] = newArr[x].length;
    }
    var max = Math.max.apply(null, numArr);
    for (var y = 0; y < numArr.length; y++) {
        if (numArr[y] == max) {
            final = newArr[y];
            break;
        }
    }
    
    if (strarr.length = 0 || k > strarr.length || k <= 0) {
        return "";
    } else {
        return final;
    }
}
console.log(longestConsec(["zone", "bigail", "theta", "poo", "tbigail", "forms", "sausage", "libe", "zas"], 2));