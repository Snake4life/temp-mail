/**
 * Knexion, knex instance connected to the database.
 */

var knex = require('knex');
var config = require('../config.js');

module.exports = knex({
	dialect: 'pg',
	connection: config.dbConnection
});