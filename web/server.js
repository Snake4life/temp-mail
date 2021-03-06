var fs = require('fs');
var path = require('path');
var async = require('async');
var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());

app.use('/', express.static(path.join(__dirname, '.build')));

app.get('/', function (req, res, next) {
	getPage('index', function (err, content) {
		if (err) return next(err);
		res.send(content);
	});
});

app.use('/api', require('./api.js'));

module.exports = app;

var getPage = async.memoize(function (pageName, callback) {
	fs.readFile(path.join(__dirname, pageName + '.html'), 'utf8', callback);
});