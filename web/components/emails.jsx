import React from 'react';
import Email from './email.jsx';

class Emails extends React.Component {
	onBackClick () {
		this.props.resetEmails();
	}

	render () {
		return (
			<div>
				<button type="button" className="btn btn-primary" onClick={this.onBackClick.bind(this)}>Back</button>
				<br />
				<br />
				{this.props.emails.map(function (email) {
					return <Email {...email} key={email.id} />
				})}
				<h1>{this.props.subject}</h1>
			</div>
		);
	}
}

module.exports = Emails;