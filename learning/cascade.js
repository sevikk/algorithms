const getNumbersSum = number =>
  nextNumber => {
    const isNextNumberExist = typeof nextNumber !== 'undefined';

    if (isNextNumberExist) {
      const reduceNumber = number + nextNumber;
      return getNumbersSum(reduceNumber);
    }

    return number;

  }

const numbersSum = getNumbersSum(2)(3)(6)(7);
console.log(numbersSum);