var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { ContentPanel } from './ContentPanel.jsx';
import { BannerBlock } from './BannerBlock.jsx';
import { TextBlockLatestUpdates } from './TextBlockLatestUpdates.jsx';

// TODO fetch the content from here, set it up to be grabbed via AJAX 
const content = {
	description: `Available for hire to make your web, print, ads, or anything
								at all into a beautiful whirl of color`,
	designs: [
		{
			company: 'backupbrain inc.',
			project: 'web banners',
			datecomplete: '09/03/2016',
			link: ''
		},
		{
			company: 'Jaymes White Entertainment',
			project: 'company logo',
			datecomplete: '01/01/2016',
			link: ''
		}
	]
};


const ContentGridWrapper = () => (
	<Grid fluid={true} className="contentgrid-area">
		<Col													lg={1}	md={1}	sm={1}		xsHidden><Row /></Col>
		<Col 													lg={10}	md={10}	sm={10}		xsHidden>
			<ContentGrid />
		</Col>
		<Col													lg={1}	md={1} 	sm={1}		xsHidden><Row /></Col>
	</Grid>
);

const ContentGrid = () => (
	<Row className="show-grid" id="entire-grid">
		<Col 											lg={1}	md={1} 	smHidden	xsHidden /> {/* Spacer*/}
		<LeftContentCol						lg={4}	md={5} 	sm={6}		xs={5} />
		<Col 											lg={1}	mdHidden	smHidden	xsHidden />		{/* Spacer*/}
		<RightContentCol					lg={4}	md={5} 	sm={6}		xs={5} />
		{/*<TextBlockLatestUpdates		lg={4}	md={5} 	sm={6}		xs={5}/>*/}
		<Col 											lg={1}	md={1} 	smHidden	xsHidden>SM!</Col>
		<Col 											lg={1}	md={0}	smHidden	xsHidden /> {/* Spacer*/}
	</Row>
);

const LeftContentCol = ({lg, md, sm, xs}) => (
	<Col lg={lg} md={md} sm={sm} xs={xs}>
		{console.log($('#entire-grid'))}
		<ContentPanel	content={content} title={['corporate', 'designs']}/>
		<BannerBlock container={$('#entire-grid')} />
	</Col>
);

const RightContentCol = ({lg, md, sm, xs}) => (
	<Col lg={lg} md={md} sm={sm} xs={xs} className="right-content-col-flex-wrapper">
		<ContentPanel	className="Aligner-item--bottom" content={content} />
	</Col>
);

export { ContentGridWrapper as ContentGrid };