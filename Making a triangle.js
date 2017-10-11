function isTriangle(a,b,c)
{
    var result = false;
    let max = Math.max(a,b,c);
    let sides = [a,b,c];
    let sortedSides = sides.sort(function(a, b){return a-b});
    sortedSides.pop();
    if (max >= sortedSides[0]+sortedSides[1]){
        var result = false;
    }
    else {
        result = true;
    }
   return result;
}

// or

function isTriangleAlt (a,b,c){
    return a+b>c && b+c > a && a+c > b;
}

console.log(isTriangleAlt(4,6,10));