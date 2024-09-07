// function majorityElement(nums) {
//     let collection = {};
//     result = {};
//     for (let el of nums ) {
//         collection[el] = collection[el] ? collection[el] + 1 : 1;
//     }
//     for (let key in collection) {
//         if (collection[key] > result[key]) {
//             result = {
//                 [key]: collection[key]
//             }
//         } else {
//            result = {
//                 [key]: collection[key]
//             }
//         }
        
//     }
//     return Number(Object.keys(result)[0]);
// }

function majorityElement(nums) {
    let count = 0,
        maj   = 0;

    for(let el of nums) {
        if (count === 0) {
            maj = el
        }
        count += (el === maj) ? 1 : -1;
        // if (maj === el) {
        //     count++;
        // } else {
        //     count--
        // }
        console.log(maj, count)
    }
    return maj
}



// majorityElement([3,2,3]); // 3
majorityElement([2,2,1,1,1,2,2,3,3,3,3,3,3,3,3,,3]);