const express = require('express');
const model = require('../db/models.js');

const router = express.Router();

/* all jobs */
router.get('/', (req, res, next) => {
  model.getAllJobs()
    .then(jobs => res.json(jobs))
    .catch(err => next(err));
});

/* single job */
router.get('/:id', (req, res, next) => {
  model.getJob(req.params.id)
    .then(job => res.json(job))
    .catch(err => next(err));
});

/* new job */
router.post('/', (req, res, next) => {
  model.createNewJob(req.body)
    .then(newJobId => model.getJob(newJobId))
    .then(newJob => res.json(newJob))
    .catch(err => next(err));
});

/* update job */
router.put('/:id', (req, res, next) => {
  model.updateJob(req.body, req.params.id)
    .then(() => model.getJob(req.params.id))
    .then(updatedJob => res.json(updatedJob))
    .catch(err => next(err));
});


/* delete job */
router.delete('/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  model.deleteJob(id)
    .then(() => res.json({ status: 'success' }))
    .catch(err => next(err));
});

module.exports = router;
