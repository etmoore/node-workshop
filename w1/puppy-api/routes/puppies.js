var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var dataPath = path.join(__dirname, '../data/puppies.json');

var puppies = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// GET all puppies
router.get('/', function(req, res, next) {
  res.json({
    status: 'success',
    results: puppies
  });
});

// GET a single puppy
router.get('/:id', function(req, res, next){
  var id = parseInt(req.params.id);
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

router.post('/', function(req, res, next){
  // res.send('posting to the puppies resource... new puppy!');
  var puppyData = req.body;
  var id = puppies.length + 1;

  var newPuppy = {
    id: puppies.length + 1,
    name: puppyData.name,
    breed: puppyData.breed,
    tendencies: puppyData.tendencies.split(','),
    alive: (puppyData.alive === "true"), // converts string to boolean
  };

  puppies.push(newPuppy);
  fs.writeFileSync(dataPath, JSON.stringify(puppies));

  res.redirect('/puppies');
});

router.put('/:id', function(req, res, next){
  var id = parseInt(req.params.id);
  res.send(`put to the puppy, id: ${id}. Update that pup!`);
});

router.delete('/:id', function(req, res, next){
  var id = parseInt(req.params.id);
  res.send(`delete puppy, id: ${id}. Bye bye, pup!`);
});


module.exports = router;
