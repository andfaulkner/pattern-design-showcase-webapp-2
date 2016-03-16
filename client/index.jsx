/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/
// REACT
var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');

// HELPER LIBS (ROUTING, STYLING)
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import routes from './routes/routes.jsx';
import Radium from 'radium';

// COMPONENTS
import Common from './components/Common/Common.jsx';

// REDUX
import { Provider } from 'react-redux';

// REDUX: CREATE APPLICATION STORE, MAKE AVAILABLE TO THE WHOLE APP
import { createStore } from 'redux';
import reducers from './store/reducers/reducers.jsx';
let store = createStore(reducers);

// LOGGING
var logger = require('./helpers/logger.js')('client/index.js');

/**
 * Routes are rendered in from here
 */
@Radium
class RootNode extends React.Component{

	render() {
		var allRoutes = _.map(routes, function(route, index) {
			let {path, component, ...miscProps} = route;
			return (
				<Route component={Common}>
					<Route {...miscProps}
						path={path}
						key={index} 
						component={component}
					/>
				</Route>
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