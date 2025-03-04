longestCommonPrefix = (strs) => {
    if (!strs.length) {
        return "Nothing match";
    }
    let result = '';
    let prefix = strs[0];

    for (let i = 0; i < prefix.length; i++) {
        if (strs.some(str => str[i] !== prefix[i])) {
            break;
        }
        result += prefix[i];
    }

    return result;
}

longestCommonPrefix(["flower","flow","flight"])