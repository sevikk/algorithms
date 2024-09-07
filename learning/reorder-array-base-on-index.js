// O(n), O (n)

function reorder(arr, arrIndex) {
    let tempArray = [...Array(arr.length)]

    // arr[i] should be present at index[i] index
    for (let i = 0; i < arr.length; i++) {
        tempArray[arrIndex[i]] = arr[i]
    }
    console.log(tempArray)
    
    // Copy temp[] to arr[]
    for (var i = 0; i < arr.length; i++) {
      arr[i] = tempArray[i];
      arrIndex[i] = i;
    }
    return arr
}


let arr = [50, 40, 70, 60, 90];
let index = [3, 0, 4, 1, 2];

reorder(arr, index)




// O(n), O(1)

// function reorder(arr,index_arr,n)
// {
 
//     // Fix all elements one by one
//     for(let i = 0 ; i < n ; i++)
//     {
     
//         // While index[i] and arr[i] are not fixed
//         while(index_arr[i]!=i)
//         {
//             let temp = arr[i];
//             arr[i] = arr[index_arr[i]];
//             arr[index_arr[i]] = temp;
             
//             let tmp = index_arr[i];
//             index_arr[i] = index_arr[index_arr[i]];
//             index_arr[index_arr[i]] = tmp;
//         }
//     }
//     return arr;
// }
 
// // Driver code
// let arr=[50, 40, 70, 60, 90 ];
 
// let index=[3, 0, 4, 1, 2];
// let n = arr.length;
 
// reorder(arr, index, n);
