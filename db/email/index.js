/**
 * Email Functions
 */

var _ = require('lodash');
var knexion = require('../knexion.js');

module.exports = {
	load: function (opts, callback) {
		var where = {};
		if (opts.q.id) {
			where.id = opts.q.id;
		} else if (opts.q.message_id) {
			where.message_id = opts.q.message_id;
		} else {
			return callback(new Error('No valid opts.q provided'));
		}
		knexion('email')
			.select('*')
			.where(where)
			.asCallback(function (err, result) {
				if (err) return callback(err);
				callback(null, _.head(result));
			});
	},
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