const helpers = require('./helpers.js');

helpers.getLastChar('twister')
  .then(data => console.log(data === 'r'))
  .catch(err => console.log(err));

helpers.findChar('Opie', 1)
  .then(data => console.log(data === 'p'))
  .catch(err => console.log(err));

helpers.calculate(6, 5, 'add')
  .then(data => console.log(data === 11))
  .catch(err => console.log(err));

helpers.calculate(6, 5, 'sub')
  .then(data => console.log(data === 1))
  .catch(err => console.log(err));

helpers.calculate(6, 5, 'mult')
  .then(data => console.log(data === 30))
  .catch(err => console.log(err));

helpers.calculate(30, 5, 'div')
  .then(data => console.log(data === 6))
  .catch(err => console.log(err));

helpers.repeater('blah', 3)
  .then(data => console.log(data === 'blahblahblah'))
  .catch(err => console.log(err));

helpers.reverseWord('blah')
  .then(data => console.log(data === 'halb'))
  .catch(err => console.log(err));

helpers.factorial(5)
  .then(data => console.log(data === 120))
  .catch(err => console.log(err));

helpers.longestString('My father likes the color red.')
  .then(data => console.log(data === 'father'))
  .catch(err => console.log(err));

helpers.getTruthy(['hi', null, false, 10, 0])
  .then(data => console.log(data.toString() === ['hi', 10].toString()))
  .catch(err => console.log(err));

helpers.getUnique([1, 2, 3], [1, 2, 4, 5])
  .then(data => console.log(data.toString() === [3, 4, 5].toString()))
  .catch(err => console.log(err));
