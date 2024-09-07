// function removeDublicates(nums) {
//     if (nums.length === 0) {
//         return 0;
//     }
//     let j = 0;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[j] !== nums[i]) {
//             console.log(nums[++j]);
//             console.log(nums[i])
//             nums[++j] = nums[i];
//             console.log(nums)
//         }
//     }
    
//     return j + 1;
// }

// While loop
const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            nums[++i] = nums[j];
        }
        j++;
    }
    return i + 1;
}

// removeDublicates([1,1,2])
removeDublicates([0,0,1,1,1,2,2,3,3,4])