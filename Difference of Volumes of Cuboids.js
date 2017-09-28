function findDifference(a, b) {
    //loading...
    var cubOne = (a[0]*a[1])* a[2];
    var cubTwo = (b[0]*b[1])*b[2];

    if (cubOne-cubTwo>=0){
        return cubOne-cubTwo;
    }
    else{
        return cubTwo-cubOne;
    }
  }

  console.log(findDifference([2,2,3],[5,4,1]));
  
  //Or...
  
function findDifference([a,b,c], [d,e,f]) {
return Math.abs((a*b*c)-(d*e*f));
}
  console.log(findDifference([2,2,3],[5,4,1]));
