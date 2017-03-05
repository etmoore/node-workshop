const express = require('express');
const router = express.Router();
const model = require('../models.js');

/*** jobs index ***/
router.get('/', (req, res, next) => {
  model.getAllJobs()
    .then(data => res.render('jobs/index.html', {
      title: 'All Jobs',
      jobs: data,
    }))
    .catch(err => res.status(404).send(err));
});

/*** new job***/
router.get('/new', (req, res, next) => {
  res.render('jobs/new.html', {
    title: 'New Job',
  });
});

router.post('/', (req, res, next) => {
  model.createNewJob(req.body)
    .then(data => res.redirect('/jobs'))
    .catch(err => res.status(400).send(err));
});

/*** update job ***/
router.get('/:id/update', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.getJob(id)
    .then(job => res.render('jobs/update.html', {
      title: 'Update Job',
      job
    }))
    .catch(err => res.status(400).send(err));
});

router.post('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.updateJob(req.body, id)
    .then(updatedJob => res.redirect('/jobs'))
    .catch(err => res.status(400).send(err));
});


/*** delete job ***/
router.get('/:id/delete', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.deleteJob(id)
    .then(data => res.redirect('/jobs'))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
