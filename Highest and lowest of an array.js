function minMax(arr){
    return [arr.sort(function(a,b){return a-b;})[0], arr.sort(function(a, b){return b-a;})[0]];
  }
console.log(minMax([1,2,4,7,6,8,6]));
