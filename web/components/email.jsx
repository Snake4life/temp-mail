import React from 'react';

class Email extends React.Component {
	render () {
		return (
			<div>
				<h1>{this.props.subject}</h1>
			</div>
		);
	}
}

module.exports = Email;