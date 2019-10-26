function onlyEven(array) {
  return array.filter(element => element % 2 == 0);
}

function onlyOneWord(array) {
  return array.filter(element => !element.includes(" "));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(element => element > 0));
}

function allSameVowels(array) {
  return array.filter(word => {
    const onlyVowels = Array.from(word).filter(letter =>
      letter.match(/[aeiou]/gi));

    if (onlyVowels.every(vowel => vowel == onlyVowels[0])) {
      return word;
    }
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
