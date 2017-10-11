function GetSum( a,b )
{var sum = 0;
   if (a-b<0){
       while(a<=b){
           sum += a;
           a++;
       }
   }
   
   else if(a-b>0){
       while(b<=a){
           sum +=b;
           b++;
       }
   }
   else {
     sum = a;
    }
   return sum;
}



const GetSumAlt = (a,b) => {
    let min = Math.min(a,b),
    max = Math.max(a,b);
    return (max-min + 1) * (min + max) / 2;
}

console.log(GetSumAlt(2, 6));