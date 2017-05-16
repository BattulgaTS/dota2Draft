import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

// import components here
import home from '../components/home';
import analyze from '../components/analyze';
import Nav from '../components/nav';

export class routes extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<Nav />
					<Route exact path="/" component={home} />
					<Route path="/analyze" component={analyze} />
				</div>
			</HashRouter>
		);
	}
}

export default routes;