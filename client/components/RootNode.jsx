/**************************************************************************************************
*
*			Root node of all app components. Wraps app in React Router.
*
*/

var React = React || require('react');
import Radium from 'radium';
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import routes from '../routes/routes.jsx';
import Common from './Common/Common.jsx';

/**
 * Routes are rendered in from here
 */
@Radium
export class RootNode extends React.Component{

	render() {
		var allRoutes = _.map(routes, function(route, index) {
			let {path, component, ...miscProps} = route;
			return (
				<Route component={Common} key={'OuterRoute_' + index}>
					<Route {...miscProps}
						path={path}
						key={'route_' + index} 
						component={component}
					/>
				</Route>
			);
		});

		return (
			<Router history={hashHistory}>
				{allRoutes}
			</Router>
		);
	}
};