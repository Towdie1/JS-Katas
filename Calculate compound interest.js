function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    while (principal < desired ){
        var profit = principal*interest;
        var profitAfterTax = profit - (profit*tax);
        principal += profitAfterTax;
        years++;
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));  