import React from 'react';

const formStyle = {
	marginTop: '50px'
};

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			domain: 'example.com'
		};
	}

	onCheckMailClick () {
		this.props.checkEmail(this.state.email + '@' + this.state.domain);
	}

	onInputChange (event) {
		var set = {};
		set[event.target.id] = event.target.value;
		this.setState(set);
	}

	render () {
		return (
			<form style={formStyle}>
				<div className="form-group">
					<div className="input-group">
						<input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.onInputChange.bind(this)} />
						<span className="input-group-addon">@{this.state.domain}</span>
					</div>
				</div>
				<button type="button" className="btn btn-primary" onClick={this.onCheckMailClick.bind(this)}>Check Mail</button>
			</form>
		);
	}
}

module.exports = About;