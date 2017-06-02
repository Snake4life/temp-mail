require('jquery');
require('tether');
require('bootstrap');
// Style
require('./app.scss');

import React from 'react';
import {render} from 'react-dom';

import Home from './home.jsx';
import About from './about.jsx';
import NavbarComponent from './navbar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { MainComponent: Home };
    this.onHomeClick = this.onHomeClick.bind(this);
    this.onAboutClick = this.onAboutClick.bind(this);
  }

  onHomeClick (e) {
    this.setState({ MainComponent: Home });
    e.preventDefault();
    e.stopPropagation();
  }

  onAboutClick (e) {
    this.setState({ MainComponent: About });
    e.preventDefault();
    e.stopPropagation();
  }

  render () {
    return (
      <div className="container-fluid">
        <NavbarComponent onHomeClick={this.onHomeClick} onAboutClick={this.onAboutClick} />
        <this.state.MainComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));