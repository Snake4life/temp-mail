import React from 'react';
import Email from './email.jsx';

class Emails extends React.Component {
	render () {
		return (
			<div>
				{this.props.emails.map(function (email) {
					return <Email subject={email.subject} />
				})}
				<h1>{this.props.subject}</h1>
			</div>
		);
	}
}

module.exports = Emails;