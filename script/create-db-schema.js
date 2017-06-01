/**
 * Create Db Schema
 * 
 * Creates a fresh database schema, erasing anything previously there.
 */

var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var async = require('async');
var knexion = require('../db/knexion.js');

var rootPath = path.join(__dirname, '..', 'db');

/**
 * Start
 */
getSchemaDefinitions(function (err, schemas) {
	if (err) throw err;
	// Pointer to allow function chaining
	var pointer = knexion.schema;
	_.each(schemas, function (dbSchema) {
		pointer = dbSchema(pointer);
	});
	// Execute
	pointer.asCallback(function (err) {
		if (err) throw err;
		console.log('Done');
		process.exit(0);
	});
});

/**
 * Get Schema Definitions
 * 
 * Function iterates through the database folder and loads schema.js files within each sub folder.
 * 
 * @param {Function} callback 
 */
function getSchemaDefinitions (callback) {
	fs.readdir(rootPath, function (err, files) {
		if (err) throw err;
		async.map(files, function (file, callback) {
			fs.stat(path.join(rootPath, file), function (err, stats) {
				if (err) return callback(err);
				if (!stats.isDirectory()) return callback();
				var schemaPath = path.join(rootPath, file, 'schema.js');
				fs.stat(schemaPath, function (err) {
					if (err && err.code === 'ENOENT') return callback();
					if (err) return callback(err);
					callback(null, require(schemaPath));
				});
			});
		}, function (err, schemas) {
			if (err) throw err;
			_.remove(schemas, _.isUndefined);
			callback(null, schemas);
		});		
	});
}