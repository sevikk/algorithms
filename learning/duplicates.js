function areThereDuplicates(...args) {
    let collection = {}

    for (let key of arguments) {
        collection[arguments[key]] = (collection[arguments[key]] || 0) + 1
    }
    for (let key in collection) {
        console.log(key)
        if (collection[key] > 1) {
            return true
        }
    }
    return false;
}

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true

