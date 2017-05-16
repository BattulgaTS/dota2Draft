import React, { Component } from 'react';

export default class inpt extends Component {
	render() {
		return (
			<div className="col-sm-2">
				<div className="form-group">
					<label htmlFor="hero1">Name:</label>
					<input type="text" className="form-control" id="usr" />
				</div>
			</div>
		);
	}
}