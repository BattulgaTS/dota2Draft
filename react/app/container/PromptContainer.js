const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Prompt = require('./prompt');
const Axios = require('axios');


var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      heroname: '',
      data: []
    }
  },
  componentDidMount: function(){
    k = this;
    Axios.get('http://localhost:3000/heronames')
      .then(function (res){
        console.log('res', res);
        let dummy = res.data.map(function (entry){
          return {
            name: entry,
            adv: 0
          }
        })
        
        k.setState({
          heroname: '',
          data: dummy
        })
      })
  },
  handleUpdateUser: function(e){
    this.setState({
      heroname: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var heroname = this.state.heroname;
    k = this;
    Axios.post('http://localhost:3000/', { "hero": this.state.heroname } )
      .then(function(res) {
        k.setState({
          heroname: '',
          data: res.data
        })
      })
  },
  render: function() {
    return (
      <div>
        <Prompt
          onSubmitUser={this.handleSubmitUser}
          onUpdateUser={this.handleUpdateUser}
          heroname={this.state.heroname} />
        <table className="col-sm-3 col-sm-offset-3">
          <thead>
            <tr>
              <td key="1"> Heroname </td>
              <td key="2"> Winrate in % </td>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map( function(rorow, i) {
              return (
                <tr key={i}>
                  <td key="1"> {rorow.name} </td>
                  <td key="2"> {rorow.adv} </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
});

module.exports = PromptContainer;
