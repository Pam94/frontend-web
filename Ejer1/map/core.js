function multiplyBy10(array) {
  return array.map(element => element * 10);
}

function shiftRight(array) {
  return array.map((array, index) => array[(index + (array.length - 1)) % array.length], []);
}

function onlyVowels(array) {
  return array.map(element =>
    Array.from(element).filter(item =>
      item.match(/[aeiou]/gi)).join(""));
}

function doubleMatrix(array) {
  return array.map(matrix => matrix.map(element => element * 2));
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
