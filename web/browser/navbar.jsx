import React from 'react';

class NavbarComponent extends React.Component {
  render() {
    return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand">Temp Mail</a>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link">Home <span className="sr-only">(current)</span></a>
						</li>
					</ul>
				</div>
			</nav>
    );
  }
}

export default NavbarComponent;