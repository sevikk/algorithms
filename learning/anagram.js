function validAnagram(str1, str2){
  // check if strings are equal
  if (str1.length !== str2.length) {
      return false
  }
  
  // check is same letter in both strings
  lookup = {}
  for (let key of str1) {
      let char = key.toLowerCase()
      // check if need to count only alphaNumeric
      if (isAlphaNUmeric(char)) {
          lookup[char] ? lookup[char] += 1 : lookup[char] = 1
      }
      
  }
  console.log(lookup)
  for (let i = 0; i < str2.length; i++) {
      let letter = str2[i].toLowerCase();
      if (!lookup[letter]) {
          return false;
      } else {
          lookup[letter] -= 1
      }        
  }
  return true;
}

function isAlphaNUmeric(key) {
  // we can check base on charCode
  const regex = new RegExp(/^([a-z0-9])$/);
  if (regex.test(key)) {
       return true
  }
}

// validAnagram('', '') // true
// validAnagram('aaz', 'zaa') // true
validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'Timetwisttext') // true