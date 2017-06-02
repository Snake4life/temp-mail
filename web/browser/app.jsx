require('jquery');
require('tether');
require('bootstrap');
// Style
require('./app.scss');

import React from 'react';
import {render} from 'react-dom';

import Home from './home.jsx';
import NavbarComponent from './navbar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { MainComponent: Home };
    this.setMainComponent = this.setMainComponent.bind(this);
  }

  setMainComponent (Component) {
    this.setState({ MainComponent: Component });
  }

  render () {
    return (
      <div className="container-fluid">
        <NavbarComponent setMainComponent={this.setMainComponent} />
        <this.state.MainComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));