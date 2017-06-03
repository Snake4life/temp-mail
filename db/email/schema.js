/**
 * Schema for email
 */

module.exports = function (schema) {
	return schema
		.dropTableIfExists('email')
		.createTable('email', function (table) {
			table.increments('id');
			table.integer('inbox_id');
			table.specificType('sender', 'json');
			table.specificType('recipients', 'json[]');
			table.text('subject');
			table.text('text');
			table.text('html');
			table.string('message_id');
			table.dateTime('date_sent');
			table.dateTime('created_date');
			table.dateTime('updated_date');
		});
};