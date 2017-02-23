var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'text.txt');

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  } else {
    console.log(data);
  }
});
