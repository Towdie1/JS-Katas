var formula = [8];

function isValid(formula){
    
        var result = true;
        
        if (((formula.indexOf(1))!==-1) && (formula.indexOf(2))!==-1){
            result = false;
            } 
        else if (((formula.indexOf(3))!==-1) && (formula.indexOf(4))!==-1){
            result = false;
            } 
        else if (((formula.indexOf(5))!==-1) && ((formula.indexOf(6))==-1)){
            result = false;
            } 
        else if (((formula.indexOf(5))==-1) && ((formula.indexOf(6))!==-1)){
            result = false;
            }
        else if (((formula.indexOf(7))==-1) && ((formula.indexOf(8))==-1)) {
            result = false;
        }
        
        else {
            result = true;
            }
        return result;
    }

console.log(isValid(formula));
