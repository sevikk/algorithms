## Cocktail sort

Youtube video: [cocktail sort](https://www.youtube.com/watch?v=njClLBoEbfI)

Cocktail shaker sort (also known as bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, shuffle sort, or shuttle sort ) is a variation of bubble sort that is both a stable sorting algorithm and a comparison sort. The algorithm differs from a bubble sort in that it sorts in both directions on each pass through the list. This sorting algorithm is only marginally more difficult to implement than a bubble sort, and solves the problem of turtles in bubble sorts. It provides only marginal performance improvements, and does not improve asymptotic performance; like the bubble sort, it is not of practical interest,, though it finds some use in education.

![image](https://www.w3resource.com/w3r_images/searching-and-sorting-algorithm-exercise-8.png)

```js
function Cocktail_sort(arr) 
{
	var swapped;
	do {
		for(var i = 0; i < arr.length - 2; i++) {
			if(arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}	
		if(!swapped) {
			break;
		}
		swapped = false;
		for( i = arr.length - 2; i > 0; i--) {
			if(arr[i] > arr[i+1]) {
				var temp1 = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp1;
				swapped = true;
			}
		}
	} while(swapped);
  return arr;
}

var test_arr = [3, 0, 2, 5, -1, 4, 1];

console.log(Cocktail_sort(test_arr));
```