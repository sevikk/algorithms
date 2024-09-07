function plusOne(digits) {
    // let res = BigInt(digits.join(''))
    // let inc = String(BigInt(res)+1n)
    // let t = inc.toString().split("").map(Number)
    
    return (BigInt(digits.join(''))+ BigInt(1)).toString().split('')

    
}

// plusOne([1,2,3]);
// plusOne([9]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])