Time Complexity:- O(N)
Auxiliary Space:- O(N)

---------------------------------------------


```js
function singleelement(arr, n) {
     //hashmap to store frequency
    let mm = new Map();
    
    for (let i=0;i<n;i++) {
        if (mm.has(arr[i])) {
  
            // If number is present in mm,
            // incrementing it's count by 1
            mm.set(arr[i], mm.get(arr[i]) + 1);
        }
        else {
  
            // If integer is not present in mm,
            // putting this integer to mm with 1 as it's value
            mm.set(arr[i], 1);
        }
    }
  
        
      //iterating over map
    for (let [key, value] of mm.entries()) 
    {
          //returning element with frequency 1
          if(value==1) 
            return key;
    }
}
  
let arr = [2, 3, 5, 4, 5, 3, 4,2,1 ];
let size = arr.length;
arr.sort();
console.log(singleelement(arr, size));

```


Time Complexity: O(n)
Auxiliary Space: O(1)

-----------------------------------------

```js
// JavaScript program to find the array 
// element that appears only once 
  
function findSingle(ar, ar_size) { 
    // Do XOR of all elements and return 
    let res = ar[0]; 
    for (let i = 1; i < ar_size; i++) 
        res = res ^ ar[i]; 

    return res; 
} 
  
// Driver code  
let ar = [2, 3, 5, 4, 5, 3, 4]; 
let n = ar.length; 
console.log("Element occurring once is "
    + findSingle(ar, n)); 

```