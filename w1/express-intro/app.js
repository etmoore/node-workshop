const express = require('express');

const app = express(); // creates an express application instance

app.get('/', function(req, res) { // define a route to handle GET requests at the root url ('/')
  let data = {
    "status": "200",
    "text": "Hello, World!"
  };
  res.json(data);
});

app.get('/fruits', function(req, res) {
  var fruits = ['apples', 'oranges', 'bananas', 'grapes'];
  res.send(fruits.join(', '));
});

app.get('/books', function(req, res) { // define route to handle GET request at /books
  var books = [
    {
      title: "The Story of Mathematics",
      author: "Ian Stewart",
      pages: 300,
    },
    {
      title: "Tools for Teaching",
      author: "Fred Jones",
      pages: 250,

    },
    {
      title: "Half Asleep in Frog Pajamas",
      author: "Tom Robbins",
      pages: 400,
    }
  ];
  res.json(books); // send json response
});

app.get('/hello/:name', function (req, res) {
  let name = req.params.name;
  name = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the name
  res.send('Hello, ' + name);
});

app.get('/user/:name/:age/:favorite', function(req, res){
  let name = req.params.name;
  let age = req.params.age;
  let favoriteLanguage = req.params.favorite;
  let data = {
    status: "200",
    text: {
      name: name,
      age: age,
      favoriteLanguage: favoriteLanguage,
    }
  };
  res.json(data);
});

app.listen(3000, function() { // start a server, listening on port 3000
  console.log('Starting a server on localhost:3000');
});
