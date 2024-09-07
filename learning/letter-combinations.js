function letterCombinations([d, ...digits]) {
    
    const arr = { 
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };

    if (!d) return [];
    let x = letterCombinations(digits);
    console.log(x, d)
    x = x.length ? x : [""];
    return arr[d].map(z => x.map(y => z + y)).flat();
}

letterCombinations("23")
// letterCombinations("")
// letterCombinations("2")
