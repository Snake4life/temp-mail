var $ = require('jquery');
import React from 'react';
import EmailInputForm from './email-form.jsx';
import Emails from './emails.jsx';

const topSpacing = {
	marginTop: '50px'
};

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { emails: [] };
	}

	checkEmail (email) {
		var self = this;
		$.get('/api/inbox/' + email, function (result) {
			self.setState({ emails: result });
		});
	}

	resetEmails () {
		this.setState({ emails: [] });
	}

	render () {
		return (
			<div className="container-fluid" style={topSpacing}>
				<div className="col-md-6 offset-md-3">
					{this.state.emails.length === 0 &&
						<EmailInputForm checkEmail={this.checkEmail.bind(this)} />	
					}
					{this.state.emails.length > 0 &&
						<Emails emails={this.state.emails} resetEmails={this.resetEmails.bind(this)} />
					}
				</div>
			</div>
		);
	}
}

module.exports = Home;