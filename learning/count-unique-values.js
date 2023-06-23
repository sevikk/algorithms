// function countUniqueValues(arr) {
//     if (!arr.length) {
//         return 0
//     }
//     let first = 0;
//     let second = 1;
//     while(second < arr.length) {
//         if (arr[first] < arr[second]) {
//             first++;
//             arr[first] = arr[second]
//         }
//         second++;
//     }
//     return first + 1;
// }



// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])