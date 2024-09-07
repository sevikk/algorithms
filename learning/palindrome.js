// function isPalindrome(s) {
//     if (s == ' ' || s == '') {
//         return true;
//     }
//     s = s.replace(/[ ,:;!?.@#$%^&*\_\-=+"'/|\\{}()\[\]\`]+/g, "").toLowerCase();
//     let start = 0;
//     let end = s.length - 1;
//     while(start < end) {
//         if (s[start] === s[end]) {
//             start++;
//             end--;
//         } else {
//             return false
//         }

//     }
//     return true
// }

// isPalindrome("A man, a plan, a canal: Panama");
// isPalindrome("race a car");
// isPalindrome("Marge, let's \"[went].\" I await {news} telegram.")


function isPalindromeNumber(x) {
    if (x < 0) return false;

    let data = x.toString();
    let left = 0;
    let right = data.length - 1;
    while (left < right) {
        if (data[left] === data[right]) {
            left++;
            right--;
        } else {
            return false
        }
    }
    return true
}

// isPalindromeNumber(121);
// isPalindromeNumber(-121);
// isPalindromeNumber(10)
