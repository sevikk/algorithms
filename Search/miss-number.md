## Miss number

```js
const numbers = [1, 2, 9, 4, 5, 6, 7, 8];

const amount = numbers.length;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

const miss = (amount+1)*(amount+2)/2-sum;

console.log(miss);
```