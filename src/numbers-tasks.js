function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return parseFloat(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  const factor = 10 ** pow;
  return Math.round(num / factor) * factor;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const num = parseFloat(value);
  return Number.isNaN(num) ? def : num;
}

function getCube(num) {
  return num ** 3;
}

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= index; i += 1) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  return String(num)
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

function isPowerOfTwo(num) {
  return num > 0 && Math.log2(num) % 1 === 0;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return typeof number === 'number' && Number.isFinite(number);
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return Math.round((x1 + x2 + x3) * 1e12) / 1e12;
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

function getCountOfOddNumbers(number) {
  const n = Math.abs(number);
  return Math.floor((n + 1) / 2);
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  isNumber,
  isInteger,
  getFloatOnString,
  getIntegerOnString,
  isSafeInteger,
  roundToSmallestInteger,
  roundToLargestInteger,
  roundToNearestInteger,
  getIntegerPartNumber,
  getSumOfNumbers,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
