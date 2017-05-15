var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../component/main');
var Home = require('../component/home');
var PromptContainer = require('../container/promptcontainer');
// var List 			= require('../container/list');

// var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function List (props){
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1> Add hero to Enemy team </h1>
      <div className='col-sm-12'>
        <form>

          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Hero Name'
              type='text' />
          </div>

          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button
              className='btn btn-block btn-success'
              type='submit' >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )

}

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='Add' component={PromptContainer}>
      	<Route component={List} />
      </Route>
    </Route>
  </Router>
);

module.exports = routes;
