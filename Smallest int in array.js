
    function findSmallestInt(args) {
        return args.sort(function(a, b){return a - b}).shift();
        
    }

console.log(findSmallestInt([3,56,345,21,3])); 