/**
 * Email Functions
 */

var _ = require('lodash');
var knexion = require('../knexion.js');

module.exports = {
	insert: function (opts, callback) {
		var data = _.assign({}, opts.data, {
			created_date: new Date(),
			updated_date: new Date()
		});
		knexion('email')
			.insert(data)
			.asCallback(function (err) {
				if (err) return callback(err);
				callback(null, data);
			});
	}
};