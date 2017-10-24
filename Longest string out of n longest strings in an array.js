function longestConsec(strarr, k) {
    var result ="";
    var combo="";
  var newArr = strarr.map(function(a, b){for (var pos = b; pos<(k+b); pos++){
      if (strarr[pos] == undefined){break;}
      else {result += strarr[pos];}
     
      
      
  }combo=result; result = ""; return combo;});
//   newArr.pop();
  var final = newArr.sort(function(a,b){return b.length - a.length});
  return final[0];
  
}
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 3));
