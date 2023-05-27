Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

Time Complexity: O(n)
Auxiliary Space: O(1)

------------------------------------

```js
/* JavaScript Function to print leaders in an array */
function printLeaders(arr,size) {
    let max_from_right = arr[size-1];

    /* Rightmost element is always leader */
        console.log(max_from_right + " ");

    for (let i = size-2; i >= 0; i--)
    {
        if (max_from_right < arr[i])
        {       
            max_from_right = arr[i];
            console.log(max_from_right + " ");
        }
    }
}
 
 
let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
printLeaders(arr, n);

```


Time complexity: O(n)
Auxiliary space: O(n)

------------------------------------------------------

```js
function printLeaders(arr, size) {
    /* create stack to store leaders*/
    let stack = [];
    stack.push(arr[size - 1]);

    for (let i = size - 2; i >= 0; i--) {
        let temp = stack.pop();
        stack.push(temp);
        if (arr[i] >= temp) {
            stack.push(arr[i]);
        }
    }

    /* print stack elements*/
    /* run loop till stack is not empty*/
    while (stack.length>0) {
        console.log(stack.pop() + " ");
    }
}
 
 
let arr = [ 16, 17, 4, 3, 5, 2 ];
let n = arr.length;
printLeaders(arr, n);

```