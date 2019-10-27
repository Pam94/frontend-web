// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every(element => element % 2 == 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every(element => typeof element === typeof input[0]);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every(array => Array.isArray(array) && array.every(element => element > 0));
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {//TODO
  return input.every(element => {
    const vowels = Array.from(element).filter(vowel =>
      vowel.match(/[aeiou]/gi));
    return vowels.every(letter => typeof letter === typeof vowels[0]);
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
