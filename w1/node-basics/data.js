// process.argv grabs the arguments passed in via the terminal
var numbers = process.argv[2].split('').join('');

// the exports property on the module object is the ONLY thing
// accessible outside of this file
module.exports = {
  numbers: numbers,
  goodbye: 'Goodbye, Node'
};
