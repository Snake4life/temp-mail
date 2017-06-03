/**
 * Schema for email
 */

module.exports = function (schema) {
	return schema
		.dropTableIfExists('inbox')
		.createTable('inbox', function (table) {
			table.increments('id');
			table.string('email_address').unique();
			table.dateTime('created_date');
			table.dateTime('updated_date');
		});
};