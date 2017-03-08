var knex = require('./knex.js');

function getAll() {
  return knex('shows').select();
}

function getSingle(showID) {
  return knex('shows').where('id', parseInt(showID)).first();
}

function add(show) {
  return knex('shows').insert(show, 'id');
}

function update(showID, updates) {
  return knex('shows').where('id', parseInt(showID)).update(updates);
}

function deleteItem(showID) {
  return knex('shows').where('id', parseInt(showID)).del();
}

module.exports = {
  getAll,
  getSingle,
  add,
  update,
  deleteItem,
};
