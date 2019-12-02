## Quick sort

Youtube video: [quick sort](https://www.youtube.com/watch?v=8hEyhs3OV1w)

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

The steps are:
1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

Animated visualization of the quicksort algorithm. The horizontal lines are pivot values.


```js
const unSortedArray = [1, 5, 6, 7, 2, 3, 4];

const quicksort = array => {
    const left = (x, xs) => xs.filter(val => val <= x);
    const right = (x, xs) => xs.filter(val => val > x);

    const sort = (x, xs) =>
        [].concat(
            quicksort(left(x, xs)),
            [x],
            quicksort(right(x, xs))
        );

    return !array.length ? [] : sort(array[0], array.slice(1));
};

```

