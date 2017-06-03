import React from 'react';

class Email extends React.Component {
	render () {
		return (
			<div className="card">
				<div className="card-block">
					<h4 className="card-title">{this.props.subject}</h4>
					{<h6 className="card-subtitle mb-2 text-muted">{this.props.sender.name}&lt;{this.props.sender.address}&gt;</h6>}
					<p className="card-text">{this.props.text}</p>
				</div>
			</div>
		);
	}
}

module.exports = Email;