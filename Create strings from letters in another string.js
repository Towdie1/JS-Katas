const accum = (s) => {
var result = '';
    for (var i = 0; i < s.length; i++) {
        var newString = s.charAt(i).toUpperCase();
        for (var x = 0; x < i; x++) {
            newString = newString.concat(s.charAt(i).toLowerCase());
        }
        if (i < s.length - 1) {
            newString = newString.concat('-');
        }

         result = result+newString;
    }
    return result;
}

console.log(accum('abUndD'));

