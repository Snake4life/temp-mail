/**
 * API
 * 
 * Principal API for the application.
 */

var express = require('express');
var router = express.Router();

router.get('/inbox/:email', function (req, res) {
	var email = req.params.email;
	// TODO
	console.log('LOAD INBOX', email);
	res.json([]);
});

module.exports = router;