var React = React || require('react');
import { Grid, Row, Col } from 'react-bootstrap'; 

export const SocialMediaIcons = React.createClass({
	render: function() {
		let {xsHidden, smHidden, mdHidden, lgHidden, ...other} = this.props;
		return (
			<Col sm={1} lg={1} md={1}
				xsHidden={!!xsHidden} smHidden={!!smHidden}
				mdHidden={!!mdHidden} lgHidden={!!lgHidden}
				className='social-media-icons-container'
			>
				<img src='img/icons/social-media/instagram-icon-bright.png'></img>
				<img src='img/icons/social-media/facebook-icon-dark.png'></img>
				<img src='img/icons/social-media/twitter-icon-dark.png'></img>
				<img src='img/icons/social-media/linkedin-icon-bright.png'></img>
			</Col>
		);
	}
});
