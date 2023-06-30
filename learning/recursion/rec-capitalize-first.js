function capitalizeFirst(arr, index = 0) {
  
  if (!arr.length) return 'Empty array';

  // If we're at the end of the array
  // return the array
  if (index === arr.length) return arr;
  
  // If the element is not empty
  if (arr[index].length) {
  
    // Get the first letter, and place all
    // the other letters in an array called `rest`
    // You can use destructuring here because strings
    // are iterable
    const [first, ...rest] = arr[index];
      
    // Update the element at the current index
    // with the new string making sure you join up `rest`
    arr[index] = `${first.toUpperCase()}${rest.join('')}`;
  
  }

  // Call the function again increasing the index
  return capitalizeFirst(arr, ++index);
}

console.log(capitalizeFirst(['dog', 'car', 'horse']));
// console.log(capitalizeFirst([]));
// console.log(capitalizeFirst(['dog', '', 'horse']));
// console.log(capitalizeFirst(['dog', 'o', 'horse']));