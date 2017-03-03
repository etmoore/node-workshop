function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

function isNumerical(num) {
  return !isNaN(num);
}

function isOperator(str) {
  const operators = ['add', 'sub', 'mult', 'div'];
  return operators.includes(str);
}

function getLastChar(str) {
  return new Promise((resolve, reject) => {
    if (isString(str)) resolve(str.charAt(str.length - 1));
    else reject('Please provide a string');
  });
}

function findChar(str, int) {
  return new Promise((resolve, reject) => {
    if (isString(str)) resolve(str.charAt(int));
    else reject('Please provide a string');
  });
}

function calculate(int1, int2, op) {
  return new Promise((resolve, reject) => {
    if (isNumerical(int1) && isNumerical(int2) && isOperator(op)){
      if (op === 'add') resolve(int1 + int2);
      if (op === 'sub') resolve(int1 - int2);
      if (op === 'mult') resolve(int1 * int2);
      if (op === 'div') resolve(int1 / int2);
    }
    else reject('Please provide two numbers and an operator: add, sub, mult, or div');
  });
}

function repeater(word, repititions) {
  return new Promise((resolve, reject) => {
    if (isString(word) && isNumerical(repititions)){
      resolve(word.repeat(repititions));
    }
    else reject('Please provide a string and integer');
  });
}

function reverseWord(word) {
  return new Promise((resolve, reject) => {
    if (isString(word)) {
      resolve(word.split('').reverse().join(''));
    }
    else reject('Please provide a string word.');
  });
}

function factorial(int) {
  return new Promise((resolve, reject) => {
    if (isNumerical(int)){
      let result = 1;
      let multiplier = int;
      for (let i = int; i > 1; i--){
        result = result * i;
        multiplier = multiplier - 1;
      }
      resolve(result);
    }
    else reject('Please provide an integer.');
  });
}

function longestString(phrase) {
  return new Promise((resolve, reject) => {
    if (isString(phrase)){
      let words = phrase.match(/\w+/g);
      let longestWord = words.reduce((a, v) => {
        return v.length > a.length ? v : a;
      }, '');
      resolve(longestWord);
    }
    else reject('Please provide a string');
  });
}

function getTruthy(arr) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(arr)){
      let truthyValues = arr.filter(v => v);
      resolve(truthyValues);
    }
    else reject('Please provide an array');
  });
}

function getUnique(arr1, arr2) {
  return new Promise((resolve, reject) =>  {
    if (Array.isArray(arr1) && Array.isArray(arr2)){
      let arr1Uniques = arr1.filter(v => !arr2.includes(v));
      let arr2Uniques = arr2.filter(v => !arr1.includes(v));
      resolve(arr1Uniques.concat(arr2Uniques));
    }
    else reject('Please provide two arrays');
  });
}

module.exports = {
  getLastChar,
  findChar,
  calculate,
  repeater,
  reverseWord,
  factorial,
  longestString,
  getTruthy,
  getUnique,
};
