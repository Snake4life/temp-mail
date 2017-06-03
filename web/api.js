/**
 * API
 * 
 * Principal API for the application.
 */

var express = require('express');
var router = express.Router();
var inboxDb = require('../db/inbox');
var emailDb = require('../db/email');

router.get('/inbox/:email', function (req, res, next) {
	var email = req.params.email;
	inboxDb.load({
		q: {
			email_address: email
		}
	}, function (err, inbox) {
		if (err) return next(err);
		if (inbox) {
			emailDb.list({
				q: {
					inbox_id: inbox.id
				}
			}, function (err, emails) {
				if (err) return next(err);
				res.json(emails);
			});
		} else {
			res.json([]);
		}
	});
});

module.exports = router;