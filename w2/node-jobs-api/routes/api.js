const express = require('express');
const router = express.Router();
const model = require('../db/models.js');

/*** all jobs ***/
router.get('/', (req, res, next) => {
  model.getAllJobs()
    .then(jobs => res.json(jobs))
    .catch(err => next(err));
});

/*** single job ***/
router.get('/:id', (req, res, next) => {
  model.getJob(req.params.id)
    .then(job => res.json(job))
    .catch(err => next(err));
});

/*** new job***/
router.post('/', (req, res, next) => {
  model.createNewJob(req.body)
    .then(newJobId => model.getJob(newJobId))
    .then(newJob => res.json(newJob))
    .catch(err => next(err));
});

/*** update job ***/
router.put('/:id', (req, res, next) => {
  model.updateJob(req.body, req.params.id)
    .then(numOfAffectedRows => model.getJob(req.params.id))
    .then(updatedJob => res.json(updatedJob))
    .catch(err => next(err));
});


/*** delete job ***/
router.delete('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.deleteJob(id)
    .then(numOfAffectedRows=> res.json({status: "success"}))
    .catch(err => next(err));
})

module.exports = router;
