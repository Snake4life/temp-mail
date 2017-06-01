/***
 * Send Inbound Email
 * 
 * Use this script to send an inbound email to the mail server
 */

const config = require('../config.js');
const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
	host: '127.0.0.1',
	port: config.mailServerPort
});

transport.sendMail({
	from: 'from@localhost.local',
	to: 'recipient@localhost.local',
	subject: 'my subject',
	text: 'my email body',
	html: '<b>my email body</b>'
}, function (err, result) {
	if (err) throw err;
	console.log('Sent', JSON.stringify(result, null, 2));
	process.exit(0);
});