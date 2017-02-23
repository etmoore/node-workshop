var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'sample.txt');

fs.writeFile(file, 'Hi!', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Saved!');
  }
});
