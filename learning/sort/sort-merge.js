function merge(arr1, arr2) {
    let first = 0;
    let second = 0;
    let result = []

    while(first < arr1.length && second < arr2.length) {
        if (arr2[second] > arr1[first]) {
            result.push(arr1[first]);
            first++
        } else {
            result.push(arr2[second]);
            second++;
        }
    }
    while (first < arr1.length) {
        result.push(arr1[first]);
        first++
    }
    while (second < arr2.length) {
        result.push(arr2[second]);
        second++
    }
    return result
}

function mergeSort(arr) {
    if (arr.length <=1 ) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)
    
}

mergeSort([2,4,5,6,3,10,7,8])