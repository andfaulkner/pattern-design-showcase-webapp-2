var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'; 

const TextContentGridWrapper = () => (
	<Grid fluid={true} className="contentblock-area">
		<Col													lg={1}	md={1}	sm={1}		xsHidden><Row /></Col>
		<Col 													lg={10}	md={10}	sm={10}		xsHidden>
			<TextContentGrid />
		</Col>
		<Col													lg={1}	md={1} 	sm={1}		xsHidden><Row /></Col>
	</Grid>
);

const TextContentGrid = () => (
	<Row className="show-grid">
		<Col 											lg={1}	md={0} 	smHidden	xsHidden /> {/* Spacer*/}
		<LeftTextContentCol				lg={4}	md={5} 	sm={6}		xs={5} />
		<Col 											lg={1}	md={1}	smHidden	xsHidden />		{/* Spacer*/}
		<TextBlockFramedVCentred	lg={4}	md={5} 	sm={6}		xs={5}/>
		<Col 											lg={1}	md={1} 	smHidden	xsHidden>SM!</Col>
		<Col 											lg={1}	md={0}	smHidden	xsHidden /> {/* Spacer*/}
	</Row>
);

const LeftTextContentCol = ({lg, md, sm, xs}) => (
	<Col lg={lg} md={md} sm={sm} xs={xs}>
		<TextContentBlockLeft	description='Available for hire to make your web, print, ads, or anything at all into a beautiful whirl of color' />
		<BannerBlock />
	</Col>
);

var BannerBlock = React.createClass({
	render: function() {
		return (
		<Row id='banner-block-container' className='contentblock-left'>
			<img className='three-banners-img-block' id='three-banners-img' src='/img/three-banners.jpg'></img>
		</Row>
		);
	},
	resizeBanners: function(e) {
    this.setState({windowWidth: window.innerWidth});
    var threeBannersImg = document.getElementById('three-banners-img');
    var bannerBlockContainer = document.getElementById('banner-block-container');
		threeBannersImg.width = $('#banner-block-container').width();
		threeBannersImg.height = $('#banner-block-container').width();
		bannerBlockContainer.height = $('#banner-block-container').width();
		bannerBlockContainer.style.height = $('#banner-block-container').width() + 'px';
	},
	componentDidMount: function() {
		window.addEventListener('resize', this.resizeBanners);
		this.resizeBanners();
	}
});

const TextContentBlockLeft = ({description}) => (
	<Row className='contentblock-left'>
		<TextContentBlockLeftTitle />
		<TextContentBlockLeftContent description={description}/>
	</Row>
);

const TextContentBlockLeftTitle = () => (
	<div className='contentblock-left--title' id='text-content-block-left-title'>
		<Row className='contentblock-left--title-row'> corporate </Row>
		<Row className='contentblock-left--title-row'> designs </Row>
	</div>
);

const TextContentBlockLeftContent = ({description}) => (
	<div className='contentblock-left--content'>
		<TextContentBlockLeftContentDescription description={description} />
		<TextContentBlockLeftContentSection
			company='backupbrain inc.'
			project='web banners'
			datecomplete='09/03/2016' />
		<TextContentBlockLeftContentSection
			company='Jaymes White Entertainment'
			project='company logo'
			datecomplete='01/01/2016' />
		<TextContentBlockLeftSeeMoreButton />
	</div>
);

const TextContentBlockLeftSeeMoreButton = () => (
	<Row className='contentblock-left--see-more-button-row'>
		<button className='contentblock-left--see-more-button'>see more >></button>
	</Row>
);


const TextContentBlockLeftContentDescription = ({ description }) => (
	<div className='contentblock-left--content-description'>
		{description}
	</div>
);


var TextContentBlockLeftContentSection = React.createClass({
	render: function() {
		return (
			<div>
				<Row className='contentblock-left--content-section'>
					<Row className='contentblock-left--content-section__title'>
						<Row className='contentblock-left--content-section__title-row'>
							{this.props.company}
						</Row>
						<Row className='contentblock-left--content-section__title-row'>
							&nbsp;| {this.props.project}
						</Row>
						<Row className='contentblock-left--content-section__date'>
							{this.props.datecomplete}
						</Row>
					</Row>
				</Row>
			</div>
		);
	}
});


var TextBlockFramedVCentred = React.createClass({
	render: function() {
		return (
			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
				<Row>
					MAIN-RIGHT!	
				</Row>
			</Col>			
		);
	}
});


module.exports = TextContentGridWrapper;



// const TextContentGrid = () => (
// 	<div className='contentblock-area'>
// 		<Grid fluid={true}>
// 			<Row className="show-grid">
// 				<Col lg={3} md={3} sm={2} xs={1}></Col>

// 				<TextContentBlockLeft lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={2} mdHidden smHidden xsHidden>MR</Col> 

// 				<TextBlockFramedVCentred lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={1} md={1} sm={1} xs={1}>SM!</Col>
// 				<Col lg={2} md={2} sm={1} xsHidden></Col>
// 			</Row>
// 		</Grid>
// 	</div>
// );
// var TextContentBlockLeft = React.createClass({
// 	render: function() {
// 		return (
// 			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
// 				<Row>
// 						MAIN-LEFT!
// 				</Row>
// 				<Row>
// 				</Row>
// 			</Col>

// 		);
// 	}
// });

// var TextBlockFramedVCentred = React.createClass({
// 	render: function() {
// 		return (
// 			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
// 				<Row>
// 					MAIN-RIGHT!	
// 				</Row>
// 			</Col>			
// 		);
// 	}
// });

// const TextContentGrid = () => (
// 	<div className="contentblock-area">
// 		<Grid fluid={true}>
// 			<Row className="show-grid">
// 				<Col lg={3} md={3} sm={2} xs={1}></Col>

// 				<TextContentBlockLeft lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={2} mdHidden smHidden xsHidden>MR</Col> 

// 				<TextBlockFramedVCentred lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={1} md={1} sm={1} xs={1}>SM!</Col>
// 				<Col lg={2} md={2} sm={1} xsHidden></Col>
// 			</Row>
// 		</Grid>
// 	</div>
// );