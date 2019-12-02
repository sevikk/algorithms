## Binary search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array; if they are unequal, the half in which the target cannot lie is eliminated and the search continues on the remaining half until it is successful. If the search ends with the remaining half being empty, the target is not in the array.

![image](https://camo.githubusercontent.com/b4fcd9ad8f7402d3eff24bef5d2cb8480ecbd448/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667)

```js
const nums = [2, 3, 1, 5, 7, 6];
const getHalfOfArray = array => Math.floor(array.length / 2);
const getLeftSide = (array) => {
    const half = getHalfOfArray(array);
    const left = array.slice(0, half);

    return left;
};
const getRightSide = (array) => {
    const half = getHalfOfArray(array);
    const right = array.slice(half, array.length);

    return right;
}
const isLastElementEqual = (array, number) => {
    if (array.length === 1 && array[0] !== number) {
        return true;
    }
}
const isElementEqualHeapValue = (max, min, number) => {
    if (number === max || number === min) {
        return true;
    }
}

const binarySearch = (nums, number) => {
    const array = nums.sort();
    const left = getLeftSide(array);
    const right = getRightSide(array);
    const max = Math.max.apply(null, left);
    const min = Math.min.apply(null, right);

    if (isLastElementEqual(array, number)) {
        return -1;
    }

    if (isElementEqualHeapValue(max, min, number)) {
        return number
    }

    if (number < max) {
        return binarySearch(left, number)
    } else {
        return binarySearch(right, number)
    }
}

console.log(binarySearch(nums, 2));
```