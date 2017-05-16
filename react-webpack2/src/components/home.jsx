import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import tst from './test';

class home extends Component {
	render() {
		return (
			<div className="home-container">
				<h1>
					Dota 2 analyzer... Analyze enemy picks and pick your hero.
				</h1>
				<Link className="button" to="/analyze">
					Lets Start
				</Link>
				<tst />
			</div>
		);
	}
}

export default home;