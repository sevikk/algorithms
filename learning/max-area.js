function maxArea(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while(start < end) {
        let count = (end - start) * Math.min(height[start], height[end]);
        max = Math.max(max, count);
        height[start] < height[end] ? start++ : end--;
    }
    return max
}

maxArea([1,8,6,2,5,4,8,3,7])
// maxArea([1,1])