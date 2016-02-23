/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/

import { Router, Route, hashHistory, Link } from 'react-router';
import routes from './routes/routes.jsx';
var logger = require('./helpers/logger.js')('client/index.js');

/**
 * Routes are rendered in from here
 */
var RootNode = React.createClass({

	render: function() {
		logger.fn('render').log('getting routes...');
		const allRoutes = _.map(routes, function(route, index) {
			return (
				<Route
					path={route.path}
					key={index} 
					component={route.component}
				/>
			);
		});

		logger.fn('render').log('about to render page...');
		return (
			<Router history={hashHistory}>
				{allRoutes}
			</Router>
		);
	}
});

ReactDOM.render(<RootNode />, document.getElementById('content'));