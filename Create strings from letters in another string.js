function accum(s) {
    var result = "";


    for (var i = 0; i < s.length; i++) {
        let firstLetter = s.charAt(i);
        var newString = firstLetter.toUpperCase();
        for (var x = 0; x < i; x++) {
            newString = newString.concat(firstLetter.toLowerCase());
        }
        if (i < s.length - 1) {
            newString = newString.concat('-');
        }

        result = result.concat(newString);
    }
    return result;
}

console.log(accum('abUndD'));