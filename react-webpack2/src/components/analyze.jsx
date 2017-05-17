import React, { Component } from 'react';
import Axios from 'axios';

class analyze extends Component {
	constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.state = {
      heroes: [],
			loading: true,
			reqHero: [],
    };
    this.handleUpdateUser0 = this.handleUpdateUser0.bind(this);
    this.handleUpdateUser1 = this.handleUpdateUser1.bind(this);
    this.handleUpdateUser2 = this.handleUpdateUser2.bind(this);
    this.handleUpdateUser3 = this.handleUpdateUser3.bind(this);
    this.handleUpdateUser4 = this.handleUpdateUser4.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }
	componentDidMount() {
		Axios.get('http://localhost:3000/api/heronames')
			.then((res) => {
				this.setState({
					heroes: res.data,
					loading: false,
					reqHero: this.state.reqHero,
				});
			});
	}
	handleUpdateUser0(e) {
    const reqHeroes = this.state.reqHero;
    reqHeroes[0] = e.target.value;
    this.setState({
    	heroes: this.state.heroes,
			loading: this.state.loading,
      reqHero: reqHeroes,
    });
  }
  handleUpdateUser1(e) {
    const reqHeroes = this.state.reqHero;
    reqHeroes[1] = e.target.value;
    this.setState({
    	heroes: this.state.heroes,
			loading: this.state.loading,
      reqHero: reqHeroes,
    });
  }
  handleUpdateUser2(e) {
    const reqHeroes = this.state.reqHero;
    reqHeroes[2] = e.target.value;
    this.setState({
    	heroes: this.state.heroes,
			loading: this.state.loading,
      reqHero: reqHeroes,
    });
  }
  handleUpdateUser3(e) {
    const reqHeroes = this.state.reqHero;
    reqHeroes[3] = e.target.value;
    this.setState({
    	heroes: this.state.heroes,
			loading: this.state.loading,
      reqHero: reqHeroes,
    });
  }
  handleUpdateUser4(e) {
    const reqHeroes = this.state.reqHero;
    reqHeroes[4] = e.target.value;
    this.setState({
    	heroes: this.state.heroes,
			loading: this.state.loading,
      reqHero: reqHeroes,
    });
  }
  handleSubmitUser(e) {
    e.preventDefault();
    const k = this;
    console.log('posting', this.state.reqHero);
    Axios.post('http://localhost:3000/api/', { hero: this.state.reqHero })
      .then((res) => {
        console.log('res', res);
     		k.setState({
     			heroes: res.data,
     			loading: k.state.loading,
     			reqHero: k.state.reqHero,
     		});
      });
  }
	renderList() {
		let table = []; //eslint-disable-line
		if (this.loading) {
			return (
				<h5> Loading </h5>
			);
		}
		this.state.heroes.forEach((entry, i) => {
			table.push(
				<tr key={i}>
					<td> {entry.name} </td>
					<td> {entry.adv} </td>
				</tr>);
		});
		return table;
	}
	render() {
		return (
			<div className="container body-container">
				<div className="col-sm-3">
					<label htmlFor="hero1">Hero1:</label>
					<input
					 	type="text"
						className="form-control"
				  	onChange={this.handleUpdateUser0}
           	value={this.state.reqHero[0]} />
					<label htmlFor="hero2">Hero2:</label>
					<input
					 	type="text"
						className="form-control"
				  	onChange={this.handleUpdateUser1}
           	value={this.state.reqHero[1]} />
					<label htmlFor="hero3">Hero3:</label>
					<input
					 	type="text"
						className="form-control"
				  	onChange={this.handleUpdateUser2}
           	value={this.state.reqHero[2]} />
					<label htmlFor="hero4">Hero4:</label>
					<input
					 	type="text"
						className="form-control"
				  	onChange={this.handleUpdateUser3}
           	value={this.state.reqHero[3]} />
					<label htmlFor="hero5">Hero5:</label>
					<input
					 	type="text"
						className="form-control"
				  	onChange={this.handleUpdateUser4}
           	value={this.state.reqHero[4]} />
					<div className="form-group">
						<button onClick={this.handleSubmitUser} style={{ marginTop: '25px' }} type="button" className="btn btn-success">Analyze</button>
					</div>
					<pre>
						{JSON.stringify(this.state.reqHero, null, 2)}
						{JSON.stringify(this.state.heroes, null, 2)}
					</pre>
				</div>
				<div className="col-sm-6">
					<table className="table">
						<thead>
							<tr>
								<th> Heroname </th>
								<th> Advantage </th>
							</tr>
						</thead>
						<tbody>
							{this.renderList()}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default analyze;
