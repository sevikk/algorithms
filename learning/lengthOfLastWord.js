// const lengthOfLastWord = (s) => {
//     const wordsArr = [];
//     let word = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== ' ') {
//             word = word + s[i]
//         } else if (word.length > 0) {
//             wordsArr.push(word)
//             word = '';
//         }
//         if (i == s.length - 1 && word !== '') {
//             wordsArr.push(word);
//             word = '';
//         }
//     }
//     const lastWordLength = wordsArr[wordsArr.length - 1].length;
//     return lastWordLength
// }

const lengthOfLastWord = (s) => {
    s = s.trim();
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == ' ') {
            return length
        }
        length++
    }
    return length
}

// lengthOfLastWord('Hello World');
// lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy")