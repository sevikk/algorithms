Time Complexity: O(n)
Auxiliary Space: O(1)

-------------------------------------------

```js
// Function to sort the array
function sortArray(arr, n) {
    var i = 0;
    while (i < n) {
        // Finding the correct index
        let correct = arr[i] - 1;

        // Element index and value not match
        // then swapping
        if (arr[correct] != arr[i]) {
            // Calling swap function
            swap(arr, i, correct);
        } else {
            i++;
        }
    }
    return arr
}
 
// Function to swap values
function swap(arr, i, correct) {
    var temp = arr[i];
    arr[i] = arr[correct];
    arr[correct] = temp;
}
 
var arr = [3, 2, 5, 6, 1, 4];
var n = 6;

// Function call
console.log(sortArray(arr, n));
```

```js


```