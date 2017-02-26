const express = require('express');
const router = express.Router();
const model = require('../models.js');

router.get('/', (req, res, next) => {
  res.render("jobs/index.html", {
    title: "All Jobs",
    jobs: model.getAllJobs(),
  });
});

router.post('/', (req, res, next) => {
  model.createNewJob(req.body);
  res.redirect("/jobs");
});


router.get('/new', (req, res, next) => {
  res.render("jobs/new.html", {
    title: "New Job",
  });
});


module.exports = router;
