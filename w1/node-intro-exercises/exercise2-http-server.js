const http = require('http');
const fs = require('fs');
const path = require('path');

const readPath = path.join(__dirname, 'people.csv');

function serveCsvAsJson(req, res){
  fs.readFile(readPath, 'utf8', function(err, data){
    if (err) console.log(err);

    let csvRows = data.split('\n').map(function(row){
      return row.split(',');
    });
    let propertyNames = csvRows.shift();
    let json = csvRows.map(function(row){
      let obj = {};
      row.forEach(function(value, i){
        obj[propertyNames[i]] = value;
      });
      return obj;
    });
    res.end(JSON.stringify(json));
  });
}

const server = http.createServer(serveCsvAsJson);
server.listen('8080');
