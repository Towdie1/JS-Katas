function getCount(str) {
    var vowelsCount = 0;
    var vowels = ['a','e','i','o','u'];
    
    for (var i=0; i<str.length; i++){
       for (var p =0; p<vowels.length; p++)
        if (str.charAt(i) == vowels[p]){
            vowelsCount++;
        }
    }
       
    return vowelsCount;
  }
