Time Complexity: O(n) where n is the size of elements of the input array.
Auxiliary Space: O(1)

--------------------------------------------


```js

function pushZerosToEnd(arr, n) {
    let count = 0; // Count of non-zero elements
 
    // Traverse the array. If element encountered is non-
    // zero, then replace the element at index 'count'
    // with this element
    for (let i = 0; i < n; i++) {
      if (arr[i] != 0) {  
            // here count is
            // incremented
            arr[count++] = arr[i];
        }
    }

 
    // Now all non-zero elements have been shifted to
    // front and 'count' is set as index of first 0.
    // Make all elements 0 from count to end.
    while (count < n) {
      arr[count++] = 0;
    }
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
let n = arr.length;
pushZerosToEnd(arr, n);
console.log("Array after pushing all zeros to end of array :" , arr);

```