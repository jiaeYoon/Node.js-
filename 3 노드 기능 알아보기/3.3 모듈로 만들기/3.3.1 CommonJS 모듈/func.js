const {odd, even} = require('./var');
// * 구조 분해 할당 문법

function checkOddorEven(num) {
  if (num % 2) {  // 홀수면
    return odd
  }
  return even
}

module.exports = checkOddorEven;