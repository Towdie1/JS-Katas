
//this is a pure function
function reverseArray (arr){
    var rarr = [];
    var i =0;
   while (i < arr.length){
    var last = arr[(arr.length-1)-i++];
    rarr.push(last);
    }
    return rarr;
}


//this is not
function reverseInPlace(arr) {
    for (var i = 0; i <arr.length; i++){
       var end = arr.pop();
       arr.splice(i,0,end);
    }
    return arr;
}

var nums = [3,67,4,987,4,2343,656,7437,8776]
x = function (arr){console.log(reverseInPlace(arr));}

x(nums);
console.log(nums);