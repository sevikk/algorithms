var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
        numZeroes = numZeroes + Math.floor(n / i);
    }
    return numZeroes;
};

trailingZeroes(0)
// trailingZeroes(25)
// trailingZeroes(100)