const environment = process.env.NODE_ENV || 'development'; // NODE_ENV is usually set in express
const config = require('../knexfile.js')[environment]; // grabs the appropriate db settings from knexfile.js based on the environment variable set above

module.exports = require('knex')(config);
