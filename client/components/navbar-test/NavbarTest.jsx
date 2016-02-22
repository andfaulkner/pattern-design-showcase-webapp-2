/**************************************************************************************************
*
*			Navigation bar at top of screen
*
*/

import { Link } from 'react-router';
import { styles } from './navbar-test-styles.jsx';

var routes = [
	{ text: 'Comments', route: '/comment' },
	{ text: 'Like', route: '/like' },
	{ text: 'Affinity', route: '/affinity' },
	{ text: 'Login', route: '/login' }
];

export default React.createClass({
	render: function() {
		var navbarItems = _.map(routes, function(routeTags, routeIndex) {
			return (
				<li style={styles.navbarliStyles} key={routeIndex}>
					<Link to={routeTags.route} style={styles.navbarLinkStyles}>
						{routeTags.text}
					</Link>
				</li>
			);
		}, {});
		return (
			<div style={styles.barLayout}>
				<ul style={styles.navbarTestulStyle}>
					{navbarItems}
				</ul>
			</div>
		);
	}
});