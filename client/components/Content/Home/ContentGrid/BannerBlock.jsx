var React = React || require('react');
import { Row, Col } from 'react-bootstrap'; 

export class BannerBlock extends React.Component {
	render() {
		return (
			<Row id='banner-block-container' className='contentblock-left'>
				<Col xsHidden> {/* always hide on tiny screens - this is a non-essential part*/}
					<img
						className='three-banners-img-block'
						id='three-banners-img'
						src='/img/three-banners.jpg'
					/>
				</Col>
			</Row>
		);
	}
};
