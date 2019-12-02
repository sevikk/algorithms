## Insertion sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

--------------------------------------------------------------

Performance is very high when operating with small lists
-----------------------------------------------------------
We start from the second item in our array as the first item has nothing to the left to compare it to.
-------------------------------------------------
Временная сложность алгоритма — O(n^{2})
-------------------------------------------------
Основной цикл алгоритма начинается не с 0-го элемента а с 1-го, 
потому что элемент до 1-го элемента будет нашей отсортированной последовательностью
-------------------------------------------------
Если же элементов меньше 10 то данный алгоритм является лучшим. 
-------------------------------------------------------------------

Youtube video: [Insertion video](https://www.youtube.com/watch?v=8oJS1BMKE64)

```js
let array = [2, 6, 1, 3, 13, 4];

const insertionSort = array => {
    let count = array.length;

    for (let index = 0; index < count; index++) { 
        // взял элемент
        let getItem = array[ index ];
        // счетчие для нового цикла
        let whileCount = index - 1;
        // пока не дойдем до нуля исполнем цикл

        if(whileCount >= 0) {
            while (array[whileCount] > getItem) { 
                // cдвиг массива
                array[ whileCount + 1 ] = array[ whileCount ]; 
                console.log(array[ whileCount + 1 ])
                whileCount--; 
            }
        }
        array[ whileCount + 1 ] = getItem;
     }                    
    return array;   
};

const result = insertionSort(array);
console.log(result)
```