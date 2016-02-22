/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/

// components

import { Router, Route, hashHistory, Link } from 'react-router';

import routes from './routes/routes.jsx';

/**
 * Routes are rendered in from here
 */
var RootNode = React.createClass({

	render: function() {
		var allRoutes = _.map(routes, function(routes, routeIndex) {
			return (
				<Route 
					path={routes.route}
					key={routeIndex}
					component={routes.component}
				/>
			);
		});
		return (
			<Router history={hashHistory}>
				{allRoutes}
			</Router>
		);
	}
});


ReactDOM.render(
	<RootNode />,
	document.getElementById('content')
);