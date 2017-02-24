const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.end(
  `Hello world! Calculator App
  Try one of the following four routes:
  - /calc/add/:num1/:num2
  - /calc/sub/:num1/:num2
  - /calc/mult/:num1/:num2
  - /calc/div/:num1/:num2`
  );
});

app.get('/calc/add/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let data = {
    status: 200,
    data: {
      operator: "add",
      num1: num1,
      num2: num2,
      solution: num1 + num2,
    }
  };
  res.json(data);
});

app.get('/calc/sub/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let data = {
    status: 200,
    data: {
      operator: "sub",
      num1: num1,
      num2: num2,
      solution: num1 - num2,
    }
  };
  res.json(data);
});

app.get('/calc/mult/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let data = {
    status: 200,
    data: {
      operator: "mult",
      num1: num1,
      num2: num2,
      solution: num1 * num2,
    }
  };
  res.json(data);
});

app.get('/calc/div/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let data = {
    status: 200,
    data: {
      operator: "div",
      num1: num1,
      num2: num2,
      solution: num1 / num2,
    }
  };
  res.json(data);
});


app.listen(3000, () => {
  console.log("listening on port 3000");
});
