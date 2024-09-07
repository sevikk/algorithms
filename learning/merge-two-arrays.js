// javascript program for the above approach
var arr1 = [ 1, 5, 9, 10, 15, 20 ];
var arr2 = [ 2, 3, 8, 13 ];

// Function to merge two arrays
function merge(m , n) {
    var i = 0, 
        j = 0, 
        k = n;
    while (i <= k && j < m) {
        console.log(i, j)
        if (arr1[i] < arr2[j])
            i++;
        else {
            var temp = arr2[j];
            arr2[j] = arr1[k];
            arr1[k] = temp;
            j++;
            k--;
        }
    }
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    return [arr1, arr2]
}


merge(arr1.length, arr2.length);