function rangeSum(a, b, c){
    var list = [];
    var sum = 0;
  
    if (c===undefined){
        c=1;
    }
    for ( i=a; i<=b; i=i+c){
        list.push(i);
    }
    
    for (var i =0; i<list.length; i++){
        sum = sum + list[i];
   }
   return sum;


}


console.log(rangeSum(1, 10, 2));