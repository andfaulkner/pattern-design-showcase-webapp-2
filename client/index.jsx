/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/

var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var hashHistory = ReactRouter.hashHistory
// import { Router, Route, hashHistory, Link } from 'react-router';
import Radium from 'radium';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import routes from './routes/routes.jsx';
var logger = require('./helpers/logger.js')('client/index.js');

import reducers from './store/reducers/reducers.jsx';
let store = createStore(reducers);

/**
 * Routes are rendered in from here
 */
@Radium
class RootNode extends React.Component{

	render() {
		var allRoutes = _.map(routes, function(route, index) {
			let {path, component, ...miscProps} = route;
			return (
				<Route
					{...miscProps}
					path={path}
					key={index} 
					component={component}
				/>
			);
		});

		var fnLog = logger.logRendering('RootNode').inspect(this.props);
		fnLog.inspect(allRoutes);
		return (
			<Router history={hashHistory}>
				{allRoutes}
			</Router>
		);
	}
};

// Outermost class - wraps UI in redux store
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<RootNode />
			</Provider>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('content'));