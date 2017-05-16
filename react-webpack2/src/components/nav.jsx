import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class nav extends Component {
	render() {
		return (
			<ul className="nav">
				<li>
					<NavLink exact activeClassName="active" to="/">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/analyze">
						Analyze
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/toolbox">
						Toolbox
					</NavLink>
				</li>
			</ul>
		);
	}
}

export default nav;