function isSubsequence(str1, str2) {

    if (!str1.length || !str2.length ) {
        return false
    }
    let i = 0
    let j = 0
    while(j < str2.length) {
        if (str1[i] === str2[j]) {
            i++
        }
        if (i === str1.length) {
            return true
        } 
        j++
    }
    return false
    
  // good luck. Add any arguments you deem necessary.
}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)