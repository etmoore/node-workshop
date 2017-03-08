var knex = require('./knex.js');

function Shows() {
  return knex('shows');
}

function getAll() {
  return Shows().select(); // jshint ignore:line
}

module.exports = {
  getAll: getAll,
};
