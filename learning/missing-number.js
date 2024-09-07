function missingNumber(nums) {
    let n = nums.length;

    const res = new Array(nums.length+1).fill(-1);
    
    for(const num of nums) {
        res[num] = num;
    }
    console.log(res);
    return res.indexOf(-1);
    
    // const expectedSum = n * (n + 1) / 2;
    // const actualSum = nums.reduce((acc, num) => acc + num, 0);
    // return expectedSum - actualSum
};


// missingNumber([3,0,1])
// missingNumber([0,1])
missingNumber([9,6,4,2,3,5,7,0,1])