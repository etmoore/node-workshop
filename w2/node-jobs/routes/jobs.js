const express = require('express');
const router = express.Router();
const model = require('../models.js');

/*** jobs index ***/
router.get('/', (req, res, next) => {
  res.render('jobs/index.html', {
    title: 'All Jobs',
    jobs: model.getAllJobs(),
  });
});

/*** new job***/
router.get('/new', (req, res, next) => {
  res.render('jobs/new.html', {
    title: 'New Job',
  });
});

router.post('/', (req, res, next) => {
  model.createNewJob(req.body);
  res.redirect('/jobs');
});

/*** update job ***/
router.get('/:id/update', (req, res, next) => {
  let id = parseInt(req.params.id);
  let job = model.getJob(id);
  res.render('jobs/update.html', {
    title: 'Update Job',
    job
  });
});

router.post('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  model.updateJob(req.body, id);
  res.redirect('/jobs');
});


module.exports = router;
