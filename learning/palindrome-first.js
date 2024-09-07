var firstPalindrome = function(words) {
    let result = '';

    const pali = (str) => {
        let i = 0;
        let j = str.length - 1;
        while(i < j) {
            if (str[i] === str[j]) {
                i++;
                j--
            } else {
                return false;
            }
        }
        return str
    }

    for (let word of words) {
        console.log(pali(word))
        if (pali(word)) {
            return word
        }
    }
    
    return '';

};


firstPalindrome(["abc","car","ada","racecar","cool"])