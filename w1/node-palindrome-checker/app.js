/*
  Create a basic Node HTTP server with a `/:word` route handler that accepts GET requests and responds with the appropriate JSON response:

  1. If user does not provide a word:
    ```json
    {
      "status": "error",
      "response": "Please provide a word."
    }
    ```
  1. If user passes in a word AND the word is not a palindrome:
    ```json
    {
      "status": "success",
      "response": "WORD is not a palindrome"
    }
    ```
  1. If user passes in a word AND the word is a palindrome:
    ```json
    {
      "status": "success",
      "response": "WORD is a palindrome"
    }
    ```
*/

const http = require('http');
const url = require('url');

function isPalindrome(word){
  word = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

const server = http.createServer((req, res) => {
  let path = url.parse(req.url).path;
  let word = path.slice(1);
  let json = {};

  if (!word.length) {
    json.status = "error";
    json.response = "Please provide a word.";
  }
  else if (isPalindrome(word)){
    json.status = "success";
    json.response = "WORD is a palindrome";
  }
  else {
    json.status = "success";
    json.response = "WORD is not a palindrome";
  }

  res.end(JSON.stringify(json));

});

server.listen(3000, () => console.log('Listening on port 3000'));
