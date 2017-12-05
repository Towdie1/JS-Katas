function solve(str, idx) {
    let arr = str.split('');
    let count = 0;
    if (idx > arr.length || idx < 0 || arr.length <= 1 || arr[idx] != "(") {
        return -1;
    }
    for (i = idx; i < arr.length; i++) {
        
        if (arr[i] == "(") {
            count++;
        } else if (arr[i] == ")") {
            count--;
        }
        if (count == 0 && arr[i] == ")") {
            return i;
        }
        
    }
    return -1;
}

console.log((solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))",19)));