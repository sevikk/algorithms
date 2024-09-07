function reverseString(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s
};

reverseString(["h","e","l","l","o"]); // ["o","l","l","e","h"]
reverseString(["H","a","n","n","a","h"]; //["h","a","n","n","a","H"]
)