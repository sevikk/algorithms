Time Complexity: O(N)
Auxiliary Space: O(1)

---------------------------------

```js

/*Function to reverse arr[] from index start to end*/
function reverseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, d, n) {
    if (d == 0) return;
    d = d % n;

    reverseArray(arr, 0, d - 1);
    reverseArray(arr, d, n - 1);
    reverseArray(arr, 0, n - 1);
}

var arr = [1, 2, 3, 4, 5, 6, 7];
var n = arr.length;
var d = 2;

console.log(leftRotate(arr, d, n));

```