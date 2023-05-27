Time Complexity: O(log n).
Auxiliary Space: O(N), for a set.

------------------------------------------

```js
let v = [10, 5, 3, 4, 3, 5, 6];
v.sort((a,b) a-b)
let newArray = new Set(v)
console.log(newArray)

```

Time Complexity: O(n log n).
Auxiliary Space: O(1)


------------------------------------------


```js
// JavaScript program to print all
// distinct elements in a given array
 
function printDistinct(arr, n) {
    const temp = []
    // First sort the array so that all
    // occurrences become consecutive
    arr.sort((a, b) => a - b);
 
    // Traverse the sorted array
    for (let i=0; i<n; i++) {
    // Move the index ahead while
    // there are duplicates
        while (i < n-1 && arr[i] == arr[i+1])
            i++;
 
    temp.push(arr[i])
    }
    return temp
}
 
// Driver program to test above function
let arr = [6, 10, 5, 4, 9, 120, 4, 6, 10];
let n = arr.length;
console.log(printDistinct(arr, n));
 

```