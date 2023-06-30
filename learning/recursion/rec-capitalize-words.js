function capitalizeWords(arr) {
  // this is the degenerate case: a single item array
  if (arr.length === 1) {
    return [arr[0].toUpperCase()]  // return a *single item array* with the one element capitalized
    // incidentally, toUpperCase capitalizes all letters, not only the first, as stated in the OP title
  }
  // here, length must be zero or > 1. If zero, the remaining code will fail, indexing past 0
  // otherwise, if length > 1, this code will run the function on the array minus
  // the last element it will return an array (see above) for that last element
  let res = capitalizeWords(arr.slice(0, -1))
  // this says capitalize the last element.
  // it's super clumsy, grabbing the last element by *slicing the array again* just before the end,
  // getting that one element from the slice, and using with toUpperCase
  // then pushing that uppercase result onto the result array
  res.push(arr.slice(arr.length - 1)[0].toUpperCase())
  return res
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']