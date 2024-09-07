function findDublicate(str) {
    if (!str.length) {
        return -1
    }
    
    let first = 0;
    let second = 1;
    while(first < str.length) {
        if (str[first] === str[second]) {
            return str.indexOf(str[first])
        }
        if (second === str.length) {
            first++;
            second = first;
        }
        second++;
    }
    return -1
}


findDublicate('abqwertyuiot')