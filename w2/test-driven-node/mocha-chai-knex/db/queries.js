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

function add(show) {
  return Shows().insert(show, 'id'); // jshint ignore:line
}

function update(showID, updates) {
  return Shows().where('id', parseInt(showID)).update(updates); // jshint ignore:line
}

module.exports = {
  getAll,
  getSingle,
  add,
  update,
};
