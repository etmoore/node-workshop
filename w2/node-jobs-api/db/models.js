const knex = require('./knex');

function getAllJobs() {
  return knex('jobs').select();
}

function getJob(id) {
  return knex('jobs').where('id', parseInt(id, 10)).first();
}

function updateJob(data, id) {
  return knex('jobs').where('id', parseInt(id, 10)).update(data);
}

function createNewJob(newJob) {
  return knex('jobs').insert(newJob, 'id');
}

function deleteJob(id) {
  return knex('jobs').where('id', parseInt(id, 10)).del();
}

module.exports = {
  getAllJobs,
  createNewJob,
  getJob,
  updateJob,
  deleteJob,
};
