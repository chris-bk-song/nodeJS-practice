function multiplyNumbers (x, y) {
  return x * y;
}

function addNumbers(a, b) {
  return a + b;
}

function divideNumbers(j, k) {
  return j / k;
}

module.exports = {
  add: addNumbers,
  multiply: multiplyNumbers,
  divide: divideNumbers,
};