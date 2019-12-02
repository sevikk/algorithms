## Selection sort

Youtube video: [selection sort](https://www.youtube.com/watch?v=92BfuxHn2XE)

Selection sort is a sorting algorithm, specifically an in-place comparison sort. It has O(n2) time complexity, making it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited

**selection-sort**
```js
let array = [2, 6, 1, 3, 13, 4];

const selectionSort = array => {
    let count = array.length;

    array.map((item, index) => {
        let indexOfminNumber = index;

        // find index of minimal number
        for (let j = index + 1; j < count; j++) {
            if (array[j] < array[indexOfminNumber]) {
                indexOfminNumber = j;
            }
        }

        // get temp minimal number
        let temp = array[indexOfminNumber];
        // replace old number
        array[indexOfminNumber] = array[index];
        // replace first index with min number
        array[index] = temp;
    })
};

const result = selectionSort(array);
console.log(array)
```

**Clone**
```js
  
let array = [2, 6, 1, 3, 13, 4];
let clone = [...array];

const getMinNum = array => Math.min(...array);
const removeItemFromArray = (array, item) => {
    array.splice(item, 1);
}

const selectionSort = array => {     
    let count = array.length; 

    for(let i = 0; i < count; i++) {
        const minNum = getMinNum(clone);
        const indexMinNum = clone.indexOf(minNum);
        
        removeItemFromArray(clone, indexMinNum)
        array[i] = minNum;
    }
};

const result = selectionSort(array);
console.log(array)
```

**New array**
```js
  
let array = [2, 6, 1, 3, 13, 4];
let sortedArray = [];
const removeItemFromArray = (array, item) => {
    array.splice(item, 1);
}
const getMinNum = array => Math.min(...array);

const selectionSort = array => {     
    let count = array.length; 

    for(let i = 0; i < count; i++) {
        const minNum = getMinNum(array);
        const indexMinNum = array.indexOf(minNum);
        
        sortedArray.push(minNum);
        removeItemFromArray(array, indexMinNum)
    }
    return sortedArray;
};

const result = selectionSort(array);
console.log(result)
```