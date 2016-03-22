/**************************************************************************************************
*
*			Small panel of social media buttons (left to right row, 4 icons)
*
*/
var React = React || require('react');
import { Grid, Row, Col } from 'react-bootstrap'; 

const urlPrefix = 'img/icons/social-media/';

const icons = {
	alternateDark: [
		{ src: `${urlPrefix}instagram-icon-bright.png` },
		{ src: `${urlPrefix}facebook-icon-dark.png` },
		{ src: `${urlPrefix}twitter-icon-dark.png` },
		{ src: `${urlPrefix}linkedin-icon-bright.png` },	
	],
	footer: [
		{ src: `${urlPrefix}instagram-footer-white.png` },
		{ src: `${urlPrefix}facebook-footer-white.png` },
		{ src: `${urlPrefix}twitter-footer-white.png` },
		{ src: `${urlPrefix}linkedin-footer-white.png` },	
	]
}



export const SocialMediaIcons = React.createClass({
	render: function() {
		let {xsHidden, smHidden, mdHidden, lgHidden, ...other} = this.props;
		return (
			<Col sm={1} lg={1} md={1}
				xsHidden={!!xsHidden} smHidden={!!smHidden}
				mdHidden={!!mdHidden} lgHidden={!!lgHidden}
				className={this.props.className || 'social-media-icons-container'}
			>
			{
				icons[this.props.theme].map((iconObj) =>
					<img src={iconObj.src}
						className={this.props.imgClassName || ''}
					/>)
			}
			</Col>
		);
	}
});
