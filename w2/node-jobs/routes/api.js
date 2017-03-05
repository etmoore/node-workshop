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
router.post('/new', (req, res, next) => {
  model.createNewJob(req.body)
    .then(newJob => res.redirect(newJob.id.toString()))
    .catch(err => res.status(500).json({error: err}));
});

/*** update job ***/
router.post('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.updateJob(req.body, id)
    .then(job => res.redirect(job.id.toString()))
    .catch(err => res.status(500).send(err));
});


/*** delete job ***/
router.get('/:id/delete', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.deleteJob(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
