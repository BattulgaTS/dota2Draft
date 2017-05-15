var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../component/main');
var Home = require('../component/home');
var PromptContainer = require('../container/promptcontainer');
var List = require('../container/list');

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
