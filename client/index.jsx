/**************************************************************************************************
*
*			Renders root node. All routes rendered in from here. 
*
*/

import { Router, Route, hashHistory, Link } from 'react-router';
import routes from './routes/routes.jsx';
var logger = require('./helpers/logger.js')('client/index.js');
import Radium from 'radium';

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

ReactDOM.render(<RootNode />, document.getElementById('content'));