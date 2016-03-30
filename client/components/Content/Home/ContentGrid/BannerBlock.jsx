/**************************************************************************************************
*
*			3 vertical banners with colourful patterns in a square shape. Displayed on home page.
*
*/

var React = React || require('react');
import { Row, Col } from 'react-bootstrap'; 

export const BannerBlock = () => (
	<Row id='banner-block-container' className='contentblock-left'>
		<Col xsHidden>
			<img
				className='three-banners-img-block'
				id='three-banners-img'
				src='/img/three-banners.jpg'
			/>
		</Col>
	</Row>
);
