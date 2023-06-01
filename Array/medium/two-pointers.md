## Two pointers techinique

geeksforgeeks: [Two pointers](https://www.geeksforgeeks.org/two-pointers-technique/)

Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.
Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.

-----------------------------------------------------------------------------

Time Complexity:  O(n log n) (As sort function is used).
Auxiliary Space: O(1), since no extra space has been taken.

-----------------------------------------------------------------------------

We take two pointers, one representing the first element and other representing the last element of the array, and then we add the values kept at both the pointers. If their sum is smaller than X then we shift the left pointer to right or if their sum is greater than X then we shift the right pointer to left, in order to get closer to the sum. We keep moving the pointers until we get the sum as X. 

```js
// Two pointer technique based solution to find
// if there is a pair in A[0..N-1] with a given sum.
function isPairSum(A, N, X)
{
 
    // represents first pointer
    var i = 0;
 
    // represents second pointer
    var j = N - 1;
 
    while (i < j) {
 
        // If we find a pair
        if (A[i] + A[j] == X)
            return true;
 
        // If sum of elements at current
        // pointers is less, we move towards
        // higher values by doing i++
        else if (A[i] + A[j] < X)
            i++;
 
        // If sum of elements at current
        // pointers is more, we move towards
        // lower values by doing j--
        else
            j--;
    }
    return false;
}
 
// Driver code
 
// array declaration
var arr = [ 2, 3, 5, 8, 9, 10, 11 ];
    
// value to search
var val = 17;
    
// size of the array
var arrSize =7;
    
// Function call
console.log(isPairSum(arr, arrSize, val));
```