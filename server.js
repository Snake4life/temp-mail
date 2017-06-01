const config = require('./config.js');

// Mail Server
var mailServer = require('./mail-server.js');
mailServer.listen(config.mailServerPort, function (err) {
	if (err) throw err;
	console.log('Mail Server listening on', config.mailServerPort);
});

// Web Server
var webServer = require('./web-server.js');
webServer.listen(config.appPort, function (err) {
	if (err) throw err;
	console.log('Web Server listening on', config.appPort);
});