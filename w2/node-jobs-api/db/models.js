const knex = require('./knex');

function getAllJobs(){
  return knex('jobs').select();
}

function getJob(id){
  return knex('jobs').where('id', parseInt(id)).first();
}

function updateJob(data, id){
  return knex('jobs').where('id', parseInt(id)).update(data);
}

function createNewJob(newJob){
  return knex('jobs').insert(newJob, 'id');
}

function deleteJob(id) {
  return knex('jobs').where('id', parseInt(id)).del();
}

module.exports = {
  getAllJobs,
  createNewJob,
  getJob,
  updateJob,
  deleteJob,
};
;
