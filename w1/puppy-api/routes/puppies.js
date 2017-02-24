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
  var formData = req.body;
  var id = puppies.length + 1;

  var newPuppy = {
    id: puppies.length + 1,
    name: formData.name,
    breed: formData.breed,
    tendencies: formData.tendencies.split(','),
    alive: (formData.alive === "true"), // converts string to boolean
  };

  puppies.push(newPuppy);
  fs.writeFileSync(dataPath, JSON.stringify(puppies));

  res.redirect('/puppies');
});

router.put('/:id', function(req, res, next){
  var id = parseInt(req.params.id);
  var puppy = puppies.filter(puppy => puppy.id === id);
  puppies = puppies.filter(puppy => puppy.id !== id); // remove the puppy that's being operated on
  var formData = req.body;

  var updatedPuppy = {
    id: id,
    name: formData.name,
    breed: formData.breed,
    tendencies: formData.tendencies.split(','),
    alive: (formData.alive === "true"), // converts string to boolean
  };

  puppies.push(updatedPuppy);
  fs.writeFileSync(dataPath, JSON.stringify(puppies));

  res.redirect('/puppies');
});

router.delete('/:id', function(req, res, next){
  var id = parseInt(req.params.id);
  puppies = puppies.filter(puppy => puppy.id !== id); // remove the puppy that's being terminated
  fs.writeFileSync(dataPath, JSON.stringify(puppies));

  res.redirect('/puppies');
});

module.exports = router;
