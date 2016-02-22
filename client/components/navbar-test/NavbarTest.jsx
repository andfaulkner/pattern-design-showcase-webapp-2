/**************************************************************************************************
*
*			Navigation bar at top of screen
*
*/

import { Link } from 'react-router';

var styles = {
	navbarliStyles: {
		float: 'left',
		boxSizing: 'border-box',
		display: 'list-item',
		listStyleType: 'none',
	},
	navbarTestulStyle: {
		listStyleType: 'none',
		marginTop: '0px',
		paddingTop: '0px',
		overflow: 'hidden',
		backgroundColor: '#333',
	  display: 'block',
		cursor: 'auto'
	},
	navbarLinkStyles: {
		backgroundColor: '#4CAF50',
		display: 'inline-block',
		color: 'white',
		textAlign: 'center',
		padding: '14px 16px',
		textDecoration: 'none'
	}
}


var routes = [
	{ text: 'Comments', route: '/comment' },
	{ text: 'Like', route: '/like' },
	{ text: 'Affinity', route: '/affinity' }
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
			<div style={{'display': 'block'}}>
				<ul style={styles.navbarTestulStyle}>
					{navbarItems}
				</ul>
			</div>
		);
	}
});