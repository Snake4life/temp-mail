// Libraries
require('jquery');
require('tether');
require('bootstrap');

// Styles
require('bootstrap/scss/bootstrap.scss');

import React from 'react';
import {render} from 'react-dom';

import Home from './components/home.jsx';
import NavbarComponent from './components/navbar.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { MainComponent: Home };
	}

	setMainComponent (Component) {
		this.setState({ MainComponent: Component });
	}

	render () {
		return (
			<div className="container-fluid">
				<NavbarComponent setMainComponent={this.setMainComponent.bind(this)} />
				<this.state.MainComponent />
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));