Time Complexity: O(n log n). 
Auxiliary space: O(1). 

--------------------------------------------

```js

// Javascript program to find second largest
// element in an array
  
// Function to print the second largest elements
function print2largest(arr, arr_size) {
    // There should be atleast two elements
    if (arr_size < 2) {
        console.log(" Invalid Input ");
        return;
    }

    // sort the array
    arr.sort((a,b) => a - b);
    console.log("There second largest element is", arr[arr.length - 2]);
}

// Driver program to test above function

let arr= [ 12, 35, 1, 10, 34, 1, 36, 122,111,3330 ];
let n = arr.length;
print2largest(arr, n);

```