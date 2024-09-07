// Given an array sorted in non-decreasing order and a target number, find the indices of the two values from the array that sum up to the given target number.
// Example
// {
// "numbers": [1, 2, 3, 5, 10],
// "target": 7
// }
// Output: [1, 3]
// Sum of the elements at index 1 and 3 is 7.   




// numbers[0]

// function


function print(number) {
  return [...Array(number)].map((_,i) => {
    let ind = i + 1;
    if( ind % 3 === 0 && ind % 5 === 0) {
      return console.log('FizzBuzz')
    }
    if( ind % 3 === 0) {
      return console.log('Fizz')
    }
    if( ind % 5 === 0) {
      return console.log('Buzz')
    }
    
    return console.log(ind)
  })
}

// print(20)

// "intervals": [[1, 5], [5, 8], [10, 15]]
// Would you be able to attend all the meetings ?


// Overlap [[1,5],[4,6]] → return 0
// If no overlap then return 1


function showIntervals(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  let result = [[intervals[0][0], intervals[0][1]]]
  
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[result.length - 1][1]) {
      return 0
    } else {
      return 1
    }
  }
  
}
console.log(showIntervals([[5, 10],[1, 4], [10, 15]]))

// 1. Can you cause a stack overflow in JavaScript?

Description of the call stack and how the JavaScript event loop works.

Function factorial(n) {
  Return n * factorial(n - 1);
}

“Maximum recursion depth exceeded” ?
“Stack overloaded?”
“Ran out of memory?”

// 2. Can you write a function that given 2 parameters as strings determines whether they are anagrams?

Can you rearrange one string to produce the other string?

An anagram is a string that you could rearrange in a way to produce the other string. A permutation.

It’s not the combined value of 2 strings.

Do you think you could come up with some examples?
Okay, showing a couple.

‘ab’ => ‘ba’?? Yes, they are anagrams.
‘abc’, ‘bc’ ?? Nope, they are not anagrams.

In 1, you can rearrange the letters of the first string to produce the other string.

How will it work if you reverse one of the strings to compare?

‘anbe’, ‘eban’ ??? false

function test(string1, string2) {
	Let reversedString = string2.split(‘’).reverse().join(‘’)

	If (string1.toLowerCase() == reversedString.toLowerCase()) {
	Return true
}
Return false

}

// 3. Do you think you could analyze the above implementation and let me know the runtime complexity of the solution?

O(n).

Is that logarithmic? It’s linear. 

Logarithmic means you’ll do recursion all the time. 



