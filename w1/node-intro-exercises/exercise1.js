/*
INSTRUCTIONS
Read *lessons/data/01_data.json* and iterate through the array:

1. Create a CSV file, where the header is made up of the keys from each object.
1. Only add data to the CSV file if the last name starts with the letters A through M
*/

const fs = require('fs');
const path = require('path');

const readPath = path.join(__dirname, '../lessons/data/01_data.json');
const writePath = path.join(__dirname, 'people.csv');

function chosenOnes(person){
  // true if last name starts with letter between A and M
  return person.lastName.charCodeAt(0) > 64 && person.lastName.charCodeAt(0) < 78;
}

function createCSVRow(rowObject){
    let row = '';
    let i = 1;
    let length = Object.keys(rowObject).length;
    for (let property in rowObject){
      row += rowObject[property];
      if (i < length) row += ',';
      i++;
    }
    return row;
}

function convertJSONtoCSV(err, data){
  let people = JSON.parse(data);
  let headerString = Object.keys(people[0]).join(',');
  let csvRows = people.filter(chosenOnes).map(createCSVRow);
  csvRows.unshift(headerString);
  let csv = csvRows.join('\n');
  fs.writeFile(writePath, csv, function(err, data){
    if (err) console.log(err);
    console.log('JSON converted to csv successfully!');
  });
}

fs.readFile(readPath, 'utf8', convertJSONtoCSV);
