var knex = require('./knex.js');

function Shows() {
  return knex('shows');
}

function getAll() {
  return Shows().select(); // jshint ignore:line
}

function getSingle(showID) {
  return Shows().where('id', parseInt(showID)).first(); // jshint ignore:line
}

module.exports = {
  getAll,
  getSingle,
};
