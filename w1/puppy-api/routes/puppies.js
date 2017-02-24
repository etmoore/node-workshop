var express = require('express');
var router = express.Router();

var puppies = [
  {
    id: 1,
    name: 'Jim',
    breed: 'Collie',
    tendencies: ['pees on trees'],
    alive: true
  },
  {
    id: 2,
    name: 'John',
    breed: 'Bulldog',
    tendencies: ['bites faces'],
    alive: true
  },
  {
    id: 3,
    name: 'Emily',
    breed: 'Doxon',
    tendencies: ['tricks', 'singing'],
    alive: false
  },
  {
    id: 4,
    name: 'Harrison',
    breed: 'Golden Retriever',
    tendencies: ['retrieving things', 'tolerant of insults'],
    alive: true
  },
  {
    id: 5,
    name: 'Harrison',
    breed: 'Pitbull',
    tendencies: ['cuddling'],
    alive: true
  }
];

// GET all puppies
router.get('/', function(req, res, next) {
  res.json({
    status: 'success',
    results: puppies
  });
});

// GET a single puppy
router.get('/:id', function(req, res, next){
  var id = parseInt(req.params.id)
  var singlePuppy = puppies.filter(puppy => puppy.id === id)[0];
  if (singlePuppy) {
    res.json({
      status: 'success',
      results: singlePuppy,
    });
  } else {
    res.json({
      status: 'success',
      results: 'Puppy does not exist!',
    });
  }
});

module.exports = router;
