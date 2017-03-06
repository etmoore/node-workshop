const express = require('express');
const router = express.Router();
const model = require('../models.js');

/*** all jobs ***/
router.get('/', (req, res, next) => {
  model.getAllJobs()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(404).json({error: err}));
});

/*** single job ***/
router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.getJob(id)
    .then(job => res.json(job))
    .catch(err => res.status(404).json({error: err}));
});

/*** new job***/
router.post('/', (req, res, next) => {
  model.createNewJob(req.body)
    .then(newJob => res.json(newJob))
    .catch(err => res.status(400).json({error: err}));
});

/*** update job ***/
router.put('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.updateJob(req.body, id)
    .then(job => res.json(job))
    .catch(err => res.status(400).send(err));
});


/*** delete job ***/
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.deleteJob(id)
    .then(data => res.json(data))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
