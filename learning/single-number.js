function singleNumber(nums) {
    // nums.sort((a,b) => a - b);

    // let i = 0;
    // let j = 1;

    // while(j < nums.length) {
    //     if (nums[i] !== nums[j]) {
    //         return nums[i]
    //     } else {
    //         i = i + 2;
    //         j = j + 2;
    //     }
    // }
    // return false;
    return nums.reduce((prev, curr) => prev ^ curr);

};

singleNumber([2,2,1])
// singleNumber([4,1,2,1,2])