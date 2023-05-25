```js
// Javascript program for find the largest
// three elements in an array
 
// Function to print three largest elements
function print3largest(arr, arr_size) {
    let first, second, third;
 
    // There should be atleast three elements
    if (arr_size < 3)
    {
        console.log(" Invalid Input ");
        return;
    }
 
    third = first = second = Number.MIN_VALUE;
    for(let i = 0; i < arr_size; i++)
    {
         
        // If current element is
        // greater than first
        if (arr[i] > first)
        {
            third = second;
            second = first;
            first = arr[i];
        }
 
        // If arr[i] is in between first
        // and second then update second
        else if (arr[i] > second)
        {
            third = second;
            second = arr[i];
        }
 
        else if (arr[i] > third)
            third = arr[i];
    }
 
    console.log("Three largest elements are "
        + first + " " + second + " "
        + third);
}
 
let arr = [ 12, 13, 1, 10, 34, 1, 25, 29 ];
let n = arr.length;
    
print3largest(arr, n);
```