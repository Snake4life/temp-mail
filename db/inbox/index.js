var _ = require('lodash');
var knexion = require('../knexion.js');

module.exports = {
	load: function (opts, callback) {
		var where = {};
		if (opts.q.id) {
			where.id = opts.q.id;
		} else if (opts.q.email_address) {
			where.email_address = _.lowerCase(opts.q.email_address);
		} else {
			return callback(new Error('No vaoid opts.q provided'));
		}
		knexion('inbox')
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
			updated_date: new Date(),
			email_address: _.lowerCase(opts.data.email_address)
		});
		knexion('inbox')
			.insert(data)
			.returning('*')
			.asCallback(function (err, result) {
				if (err) return callback(err);
				callback(null, _.head(result));
			});
	}
};