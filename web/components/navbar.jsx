import React from 'react';

import Home from './home.jsx';
import About from './about.jsx';

class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 'home' };
	}

	onHomeClick (e) {
		this.setState({ activeTab: 'home' });
		this.props.setMainComponent(Home);
		e.preventDefault();
		e.stopPropagation();
	}

	onAboutClick (e) {
		this.setState({ activeTab: 'about' });
		this.props.setMainComponent(About);
		e.preventDefault();
		e.stopPropagation();
	}

	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="/">Temp Mail</a>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className={"nav-item " + (this.state.activeTab === 'home' ? 'active' : '')}>
							<a className="nav-link" onClick={this.onHomeClick.bind(this)} href="#">Home</a>
						</li>
						<li className={"nav-item " + (this.state.activeTab === 'about' ? 'active' : '')}>
							<a className="nav-link" onClick={this.onAboutClick.bind(this)} href="#">About</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavbarComponent;