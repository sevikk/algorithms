## Shell sort

Youtube video: [shell sort](https://www.youtube.com/watch?v=n4sk-SzGvZA)

Shellsort, also known as Shell sort or Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. Starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange


**How Shell Sort Works**
For our example and ease of understanding, we take the interval of 4. Make a virtual sub-list of all values located at the interval of 4 positions. Here these values are {35, 14}, {33, 19}, {42, 27} and {10, 44}

![image](https://camo.githubusercontent.com/e513df288e0848b06be6aaddd915b49045243985/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72745f6761705f342e6a7067)

We compare values in each sub-list and swap them (if necessary) in the original array. After this step, the new array should look like this

![image](https://camo.githubusercontent.com/7eaf0dfeabb2182d98a11a98a95c830edeaeb634/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72745f737465705f312e6a7067)

Then, we take interval of 2 and this gap generates two sub-lists
{14, 27, 35, 42}, {19, 10, 33, 44}

![image](https://camo.githubusercontent.com/b1cfab2bbe108b85a4882febd1ac006717878195/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72745f6761705f322e6a7067)

We compare and swap the values, if required, in the original array. After this step, the array should look like this

![image](https://camo.githubusercontent.com/2addcea0aa2a3f46395d6cd170ac50a1e0d9db8f/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72745f737465705f322e6a7067)

```UPD: On the picture below there is a typo and result array is supposed to be [14, 10, 27, 19, 35, 33, 42, 44].```

Finally, we sort the rest of the array using interval of value 1. Shell sort uses insertion sort to sort the array.

![image](https://camo.githubusercontent.com/f1582c977afc6d847565393b86417638524dfac4/68747470733a2f2f7777772e7475746f7269616c73706f696e742e636f6d2f646174615f737472756374757265735f616c676f726974686d732f696d616765732f7368656c6c5f736f72742e6a7067)


```js
let array = [2, 6, 1, 3, 13, 4];

const shellSort = array => {
    let count = array.length;
    let halfCount = count => {
        return Math.floor(count/2);
    };

    for (let index = 0; index < count; index++) {
        const getHalftCount = halfCount(index + (index + 1));
        console.log(getHalftCount)
        if (array[index] > array[getHalftCount]) {
            //console.log(array[index], array[getHalftCount])
            [array[index], array[getHalftCount]] = [array[getHalftCount], array[index]];
        }
    }

    return array;
};

console.log(shellSort(array))
```
