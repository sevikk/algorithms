function romanToInt(s) {
    var symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    s = s.replace('IV', 'IIII').replace('IX', 'VIIII');
    s = s.replace('XC', 'LXXXX').replace('XL','XXXX');
    s = s.replace('CM', 'DCCCC').replace('CD','CCCC')

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        result += symbols[s[i]]
    }
    return result;
};

// romanToInt("III");
// romanToInt("LVIII");
// romanToInt("MCMXCIV");
romanToInt("MCDLXXVI")