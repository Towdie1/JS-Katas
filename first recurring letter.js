function findClosestRecurringLetter(str) {
    var result;
    var letter;
    for (var i = 0; i < str.length; i++) {
        var x = str.charAt(i);
        for (var y = i + 1; y < str.length; y++) {
            var l = str.charAt(y);
            if (x == l) {
                var z = y - i;
                if (z < result || result == undefined) {
                    result = z;
                    letter = x;
                }


            }
        }
    }
    return letter;
}

console.log(findClosestRecurringLetter('ABFdrtBALuLSgg'));