require('jquery');
require('tether');
require('bootstrap');
// Style
require('./app.scss');

import React from 'react';
import {render} from 'react-dom';

import NavbarComponent from './navbar.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <NavbarComponent />
        <h1>Welcome!</h1>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));