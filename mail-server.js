const _ = require('lodash');
const async = require('async');
var emailDb = require('./db/email');
var inboxDb = require('./db/inbox');
const SMTPServer = require('smtp-server').SMTPServer;
const simpleParser = require('mailparser').simpleParser;

/**
 * Create server instance
 */
module.exports = new SMTPServer({
	onData: onData,
	name: 'temp-mail',
	hideSTARTTLS: true,
	authOptional: true
});

/**
 * On Data
 * 
 * Event handler when email data is received.
 * 
 * @param {Object} stream 
 * @param {Object} session 
 * @param {Function} callback 
 */
function onData (stream, session, callback) {
	simpleParser(stream, function (err, mail) {
		if (err) return callback(err);
		insertMail(mail, function (err, result) {
			if (err) {
				console.log('Failed to insert email', err);
			} else {
				console.log('--- NEW MAIL ---', JSON.stringify(result, null, 2));
			}
			callback();
		});
	});
}

/**
 * Insert Mail
 * 
 * Inserts a parsed email object into the database.
 * 
 * @param {Object} mail 
 * @param {Function} callback 
 */
function insertMail (mail, callback) {
	var senderEmail = _.get(mail, 'from.value[0].address');
	async.waterfall([
		function getOrCreateInboxRecord (callback) {
			inboxDb.load({
				q: {
					email_address: senderEmail
				}
			}, function (err, inbox) {
				if (err) {
					return callback(err);
				} else if (inbox) {
					return callback(null, inbox);
				} else {
					inboxDb.insert({
						data: {
							email_address: senderEmail
						}
					}, callback);
				}
			});
		},
		function insertEmailRecord (inbox, callback) {
			emailDb.insert({
				data: {
					inbox_id: inbox.id,
					recipients: mail.to.value,
					sender: _.head(mail.from.value),
					subject: mail.subject,
					text: mail.text,
					html: mail.html,
					date_sent: mail.date,
					message_id: mail.messageId
				}
			}, callback);
		}
	], callback);
}