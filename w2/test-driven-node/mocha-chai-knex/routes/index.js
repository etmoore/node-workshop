var express = require('express');
var router = express.Router();

var queries = require('../db/queries');

/* GET all shows */
router.get('/shows', function(req, res, next) {
  queries.getAll()
    .then(shows => res.status(200).json(shows))
    .catch(error => next(error));
});

/* GET one show */
router.get('/shows/:id', (req, res, next) => {
    queries.getSingle(req.params.id)
    .then(show => res.status(200).json(show))
    .catch(error => next(error));
});

/* POST a new show */
router.post('/shows', (req, res, next) => {
  queries.add(req.body)
    .then(showID => queries.getSingle(showID))
    .then(show => res.status(200).json(show))
    .catch(error => next(error));
});

// *** update show *** //
router.put('/shows/:id', (req, res, next) => {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field',
    });
  }
  queries.update(req.params.id, req.body)
    .then(() => queries.getSingle(req.params.id))
    .then(show => res.status(200).json(show))
    .catch(error => next(error));
});

module.exports = router;
