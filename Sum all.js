function sumAll(){
    var sum = 0;
    for (var i =0; i<arguments.length; i++){
         sum = sum + arguments[i];
    }
    return sum;

}

console.log(sumAll(2, 4, 5, 6));