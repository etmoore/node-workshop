function getLastChar(str){
  // return the last character of a string
  return str.slice(-1);
}

function findChar(str, int){
  // take a string and integer and return the character at the position represented by the integer
  return str[int];
}

function calculate(int1, int2, str){
  // takes two integers and a string.
  // If the string is 'add', return the sum of the integers
  if (str === 'add') return int1 + int2;
  // If the string is 'sub', return the difference of the integers
  if (str === 'sub') return int1 - int2;
  // If the string is 'mult', return the product of the integers
  if (str === 'mult') return int1 * int2;
  // If the string is 'div', return the quotient of the integers
  if (str === 'div') return int1 / int2;
  // Otherwise, return 0
  else return 0;
}

function repeater(str, int){
  // takes a string and an integer and returns the string repeated that many times
  return str.repeat(int);
}

function reverseWord(str){
  // takes a string as an argument and returns the reverse of that string
  return str.split('').reverse().join('');
}

function factorial(int){
  // takes an int and returns its factorial
  let product = int;
  for (let i = int - 1; i > 1; i--){
    product *= i;
  }
  return product;
}

function factorialRecursive(int){
  if (int === 1 || int === 0) return 1;
  else return int * factorialRecursive(int - 1);
}

function longestString(phrase){
  // takes a phrase (string) and returns the longest word from that phrase
  let words = phrase.split(' ');
  let longest = words.reduce((previous, current) => {
    return previous.length > current.length ? previous : current;
  }, '');
  return longest;
}

function getTruthy(arr){
  // takes an array and returns a filtered array with only truthy values
  return arr.filter((value) => {
    return value;
  });
}

function getUnique(arr1, arr2){
  // takes two arrays as an argument and returns elements that are only in one array
  return arr1.filter((value) => {
    return !arr2.includes(value);
  }).concat(arr2.filter((value) => {
    return !arr1.includes(value);
  }));
}
