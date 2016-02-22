/**************************************************************************************************
*
*			Navigation bar at top of screen
*
*/

import { Link } from 'react-router';
import { styles } from './navbar-test-styles.jsx';

import routes from '../../../routes/routes.jsx';

export default React.createClass({
	render: function() {
		var navbarItems = _.compact(_.map(routes, function(routeTags, routeIndex) {
			// if topbar text isn't defined, this route isn't for the topbar
			return (routeTags.topbarText)
				? (
					<li style={styles.navbarliStyles} key={routeIndex}>
						<Link to={routeTags.route} style={styles.navbarLinkStyles}>
							{routeTags.topbarText}
						</Link>
					</li>
				) : undefined;
		}, {}));
		return (
			<div>
				<div style={styles.barLayout}>
					<ul style={styles.navbarTestulStyle}>
						{navbarItems}
					</ul>
				</div>
			</div>
		);
	}
});