var _ = require('lodash');
const config = require('./config.js');
const EventEmitter = require('events').EventEmitter;

var eventEmitter = new EventEmitter();

var ready = _.after(2, function () {
	eventEmitter.emit('ready');
});

// Mail Server
var mailServer = require('./mail-server/server.js');
mailServer.listen(config.mailServerPort, function (err) {
	if (err) throw err;
	console.log('Mail Server listening on', config.mailServerPort);
	ready();
});

// Web Server
var webServer = require('./web/server.js');
webServer.listen(config.appPort, function (err) {
	if (err) throw err;
	console.log('Web Server listening on', config.appPort);
	ready();
});

module.exports = eventEmitter;