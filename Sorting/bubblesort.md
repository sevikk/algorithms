## Bubble sort

youtube video [bubble sort](https://www.youtube.com/watch?v=Cq7SMsQBEUw)

Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order (ascending or descending arrangement). The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
-----------------------------------------------------------------------------

Сложность алгоритма: O(n^{2})
-----------------------------------------------------------------------------
Алгоритм состоит из повторяющихся проходов по сортируемому массиву. 
За каждый проход элементы последовательно сравниваются попарно и, если порядок 
в паре неверный, выполняется обмен элементов. Проходы по массиву повторяются 
N-1 раз или до тех пор, пока на очередном проходе не окажется, 
что обмены больше не нужны, что означает — массив отсортирован
---------------------------------------------------------------------------
на каждом следующем проходе число обрабатываемых элементов уменьшается на 1 
и нет необходимости «обходить» весь массив от начала до конца каждый раз.

```js
let array = [2, 6, 1, 3, 13, 4];
let count = array.length - 1;

const sortBubble = array => {
    for (let i = count; i > 0; i--) {  
        let counter = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                counter++;
            }
        }  
        if(counter === 0){
           return array;
        } 
    }
};

sortBubble(array);
console.log(array)
```