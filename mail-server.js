const _ = require('lodash');
const SMTPServer = require('smtp-server').SMTPServer;
const simpleParser = require('mailparser').simpleParser;

var server = new SMTPServer({
	name: 'temp-mail',
	hideSTARTTLS: true,
	authOptional: true,
	onData(stream, session, callback) {
		simpleParser(stream, function (err, mail) {
			if (err) return callback(err);
			console.log('--- NEW MAIL ---');
			console.log('From:', _.map(mail.from.value, 'address').join(', '));
			console.log('To:', _.map(mail.to.value, 'address').join(', '));
			console.log('Subject:', mail.subject);
			console.log('Body', mail.html || mail.text);
			callback();
		});
	}
});

module.exports = server;