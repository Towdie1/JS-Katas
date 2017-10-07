 function gimme(inputArray) {
   var x = inputArray.slice();
   var sorted = x.sort(function(a,b){return a-b});
   var middle = x[1];
   var result = inputArray.indexOf(middle);
   return result;
   
  };

  console.log(gimme([6,4,5]));