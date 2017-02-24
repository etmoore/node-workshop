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

app.get('/calc/:operator/:num1/:num2', (req, res) => {
  let operator = req.params.operator;
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let solution = function() {
    if (operator === "add") return num1 + num2;
    if (operator === "sub") return num1 - num2;
    if (operator === "mult") return num1 * num2;
    if (operator === "div") return num1 / num2;
  }();

  let data = {
    status: 200,
    data: {
      operator: operator,
      num1: num1,
      num2: num2,
      solution: solution,
    }
  };

  res.json(data);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
