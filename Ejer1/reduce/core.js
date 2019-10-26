function sum(array) {
  return array.reduce((total, num) => total += num);
}

function productAll(array) {//TODO
  return array.reduce(matrix => matrix.reduce((total, num) => total * num));
}

function objectify(array) {
  return array.reduce((object, matrix) => {
    object[matrix[0]] = matrix[1];
    return object;
  }, {});
}

function luckyNumbers(array) {
  let luckyMessage = 'Your lucky numbers are: ';
  luckyMessage += array.reduce((string, element, index) => {
    if (index == array.length - 1) {
      string += 'and ' + element;
    } else {
      string += element + ', ';
    }
    return string;
  }, '');

  return luckyMessage;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};
