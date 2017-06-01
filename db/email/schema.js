/**
 * Schema for email
 */

module.exports = function (schema) {
	return schema
		.dropTableIfExists('email')
		.createTable('email', function (table) {
			table.increments('id');
			table.specificType('sender', 'json');
			table.specificType('recipients', 'json[]');
			table.text('subject');
			table.text('text');
			table.text('html');
			table.string('messageId');
			table.dateTime('date_sent');
			table.dateTime('created_date');
			table.dateTime('updated_date');
		});
};