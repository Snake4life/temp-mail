var uuid = require('uuid');
const config = require('../config.js');
const nodemailer = require('nodemailer');
var startServer = require('./start-server.js');

var inboxDb = require('../db/inbox');

describe('test.inbox.js', function () {
	before(startServer);

	var transport = nodemailer.createTransport({
		host: '127.0.0.1',
		port: config.mailServerPort
	});

	it('New email creates inbox', function (callback) {
		var recipientEmail = uuid.v4() + '@localhost.local';
		transport.sendMail({
			from: 'Sender Name <from@localhost.local>',
			to: 'Recipient Name <' + recipientEmail + '>',
			subject: 'my subject',
			text: 'my email body',
			html: '<b>my email body</b>'
		}, function (err) {
			if (err) return callback(err);
			inboxDb.load({
				q: {
					email_address: recipientEmail
				}
			}, function (err, inbox) {
				if (err) return callback(err);
				if (!inbox) return callback(new Error('Inbox not found'));
				callback();
			});
		});
	});
});