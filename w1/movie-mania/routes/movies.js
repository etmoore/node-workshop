var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request('http://www.omdbapi.com/?s=matrix', (err, response, body) => {
    let movies = JSON.parse(body).Search.slice(0, 4);
    res.render('index', {
      title: 'Matrix Movies',
      movies: movies,
    });
  });
});

module.exports = router;
