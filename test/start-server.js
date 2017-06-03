var queue = [];
var isServerReady = false;
var server = require('../server.js');

server.on('ready', function () {
	isServerReady = true;
	while (queue.length > 0) {
		var callback = queue.pop();
		callback();
	}
});

module.exports = function (callback) {
	if (isServerReady) return callback();
	queue.push(callback);
};