Search

---------------------------

Time Complexity: O(N) 
Auxiliary Space: O(1)

---------------------------

```js
function findElement( arr, n, key) {
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == key)
            return i;
 
    return -1;
}
 
 
     
    // Driver program
     
let arr = [12, 34, 10, 6, 40];
let n = arr.length;

// Using a last element as search element
let key = 40;
let position = findElement(arr, n, key);

if (position == - 1)
    console.log("Element not found");
else
    console.log("Element Found at Position: "
            + (position + 1));

```



Insert

---------------------------

Time Complexity: O(1) 
Auxiliary Space: O(1)

---------------------------

```js

function insertSorted(arr, n, key, capacity) {
      
    // Cannot insert more elements
    // if n is already more than
    // or equal to capacity
    if (n >= capacity)
        return n;
  
    arr[n] = key;
    return (n + 1);
}
 
let arr = [12,16,20,40,50,70];
let capacity = 20;
let n = arr.length;
let i, key = 26;
 
insertSorted(arr, n, key, capacity);
 
// Inserting key
console.log(arr);

```


Insert at any position

---------------------------

Time complexity: O(N)
Auxiliary Space: O(1)

---------------------------

```js
 function insertElement(arr, n, x, pos){
    // shift elements to the right
    // which are on the right side of pos
    for (let i = n-1; i >= pos; i--) {
        arr[i + 1] = arr[i];
    }
    arr[pos] = x;
}
     
let arr = [2,4,1,8,5];
let n = arr.length;
let x = 10;
let pos = 2;
         
        // Inserting key at specific position
insertElement(arr, n, x, pos);
console.log(arr);
```


Delete Operation

---------------------------


---------------------------

```js
// function to search a key to
    // be deleted
function findElement(arr,n,key) {
    for (let i = 0; i < n; i++)
        if (arr[i] == key)
            return i;

    return -1;
}
function deleteElement(arr,n,key){
    // Find position of element to be
    // deleted
    let pos = findElement(arr, n, key);
    
    if (pos == -1)
    {
        document.write("Element not found");
        return n;
    }
    
    // Deleting element
    for (let i = pos; i< n - 1; i++)
        arr[i] = arr[i + 1];
    return n - 1
}
           
let arr = [10, 50, 30, 40, 20];

let n = arr.length;
let key = 30;


n = deleteElement(arr, n, key);
for (i=0; i<n; i++)
          console.log(arr[i]+" ");
           
     
```
