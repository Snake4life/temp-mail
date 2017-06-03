import React from 'react';
import EmailInputForm from './email-form.jsx';

class Home extends React.Component {
	checkEmail (email) {
		// TODO
		console.log('checking', email);
	}

	render () {
		return (
			<div className="container-fluid">
				<div className="col-md-6 offset-md-3">
					<EmailInputForm checkEmail={this.checkEmail.bind(this)} />
				</div>
			</div>
		);
	}
}

module.exports = Home;