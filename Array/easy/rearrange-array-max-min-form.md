Time Complexity: O(N), Iterating over the array of size N 2 times.
Auxiliary Space: O(N), since N extra space has been taken.

-----------------------------------

```js
// JavaScript program to rearrange an array in minimum
// maximum form
  
// Prints max at first position, min at second position
// second max at third position, second min at fourth
// position and so on.
function rearrange(arr, n) {
    // Auxiliary array to hold modified array
    let temp = new Array(n);
  
    // Indexes of smallest and largest elements
    // from remaining array.
    let small = 0, 
        large = n - 1;
  
    // To indicate whether we need to copy remaining
    // largest or remaining smallest at next position
    let flag = true;
  
    // Store result in temp[]
    for (let i = 0; i < n; i++) {
        if (flag) {
          temp[i] = arr[large--];
        } else {
          temp[i] = arr[small++];
        }
        flag = !flag;
    }
  
    return temp;
}
  
// Driver code
let arr = [ 1, 2, 3, 4, 5, 6, 21, 32, 1002 ];
let n = arr.length;

console.log(rearrange(arr, n));

```