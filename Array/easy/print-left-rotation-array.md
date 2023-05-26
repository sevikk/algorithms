Time Complexity: O(N), as we are using a loop to traverse N times.
Auxiliary Space: O(1), as we are not using any extra space.

------------------------------------------------

```js
// JavaScript implementation of left rotation of
// an array K number of times
 
// Function to leftRotate array multiple times
function leftRotate(arr, n, k){
    let temp = []
    /* To get the starting point of rotated array */
    let mod = k % n;
 
    // Prints the rotated array from start position
    for (let i = 0; i < n; i++)
        temp[i] = arr[(mod + i) % n];
 
    return temp;
}

let arr = [ 1, 3, 5, 7, 9 ];
let n = arr.length;
 
let k = 2;
// Function Call
console.log(leftRotate(arr, n, k));
 
k = 3;
// Function Call
console.log(leftRotate(arr, n, k));
 
k = 4;
// Function Call
console.log(leftRotate(arr, n, k));

```