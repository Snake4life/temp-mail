/**
 * Test inbound mail into the system
 */

describe('test.inbound-mail.js', function () {

	const config = require('../config.js');
	const nodemailer = require('nodemailer');

	var transport = nodemailer.createTransport({
		host: '127.0.0.1',
		port: config.mailServerPort
	});

	var messageId;

	it('Send email to system', function (callback) {
		transport.sendMail({
			from: 'Sender Name <from@localhost.local>',
			to: 'Recipient Name <recipient@localhost.local>',
			subject: 'my subject',
			text: 'my email body',
			html: '<b>my email body</b>'
		}, function (err, result) {
			if (err) return callback(err);
			messageId = result.messageId;
			callback();
		});
	});

	var emailDb = require('../db/email');

	it('Email should be saved in database', function (callback) {
		emailDb.load({
			q: {
				message_id: messageId
			}
		}, function (err, result) {
			if (err) return callback(err);
			if (!result) return callback(new Error('Message not found'));
			callback();
		});
	});

});