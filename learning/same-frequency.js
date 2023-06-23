function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
    let first = num1.toString();
    let second = num2.toString();
    if (first.length !== second.length) {
        return false
    }
    let lookup = {}
    for (let char of first) {
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1
    }
    for (let i = 0; i < second.length; i++) {
        let number = second[i];
        if (!lookup[number]) {
            return false
        } else {
            lookup[number] -= 1
        }
    }
    return true
}

sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false