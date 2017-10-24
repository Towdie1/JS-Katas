// function longestConsec(strarr, k) {
//     let result = [];
//     strarr.sort(function (a, b){return b.length - a.length});
//     for(let i = 0; i <k; i++){
//         result.push(strarr[i]);
//     }
//     return result;
// }



longestConsec = (strarr, k) => {if (strarr.length == 0 || k > strarr.length || k <= 0){return "P";} 
else {return strarr.sort(function (a, b){return b.length - a.length}).slice(0, k).join("");}}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 3));