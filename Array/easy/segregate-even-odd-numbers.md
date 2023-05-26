Time Complexity : O(n) 
Auxiliary Space : O(1), since no extra space has been taken.

---------------------------------


```js
// JavaScript code to segregate even odd
// numbers in an array
 
// Function to segregate even odd numbers
function arrayEvenAndOdd(arr, n) {
 
    let i = 0,
        j = 0;
  
  while (j <= n) {
    if (arr[j] % 2 == 0) {
      
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
    j++;
  }
 
    return arr;
}
 
 
let arr = [ 1, 3, 2, 4, 7, 6, 9, 10 ];
console.log(arrayEvenAndOdd(arr, arr.length));


```