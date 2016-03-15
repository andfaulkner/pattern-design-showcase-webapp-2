var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'; 
import { ContentPanel } from './ContentPanel.jsx';
import { BannerBlock } from './BannerBlock.jsx';
import { TextBlockLatestUpdates } from './TextBlockLatestUpdates.jsx';

// TODO fetch the content from here, set it up to be grabbed via AJAX 
const contentLeft = {
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

// TODO fetch the content from here, set it up to be grabbed via AJAX 
const contentRight = {
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
	<Grid fluid={true} className="contentgrid-area" id='content-grid'>
		<Col													lg={1}	md={1}	sm={1}		xs={1}><Row /></Col>
		<Col 													lg={10}	md={10}	sm={10}		xs={10}>
			<ContentGrid />
		</Col>
		<Col													lg={1}	md={1} 	sm={1}		xs={1}><Row /></Col>
	</Grid>
);

			// className="show-grid" id="entire-grid" style={{
			// 	width: '100%',
			//   '@media (max-width: 767px)': {
			//     width: '100%',
			// 		display: 'flex!important'
			//   }
			// }

@Radium({isRoot: true})
class ContentGrid extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	xsStyle = () => {
		let xsstyle = {
			'@media (max-width: 767px)': {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center'
			}
		};
		return xsstyle;
	}

	render() {
		console.log('ContentGrid.jsx:: ContentGridthis.xsStyle():', this.xsStyle());
		return (
			<Row xs={12} style={this.xsStyle()} id='content-grid-wrapper'>
				<Col 											lg={1}		md={1} 		smHidden	xs={2} /> {/* Spacer*/}
				<LeftContentCol						lg={4}		md={5} 		sm={5}		xs={8} />
				<Col 											lg={1}		mdHidden	smHidden	xs={2} />		{/* Spacer*/}
				<Col 											lgHidden	mdHidden	smHidden	xs={3} />		{/* Spacer*/}
				<RightContentCol					lg={4}		md={5} 		sm={5}		xs={7} />
				{/*<TextBlockLatestUpdates		lg={4}	md={5} 	sm={6}		xs={5}/>*/}
				<Col 											lg={1}	md={1} 	smHidden	xsHidden>SM!</Col>
				<Col 											lg={1}	md={0}	smHidden	xs={2} /> {/* Spacer*/}
			</Row>
		);
	}
};

// const ContentGrid = () => (
// 	<Row className="show-grid" id="entire-grid" style={{
// 		width: '100%',
// 	  '@media (max-width: 767px)': {
// 	    width: '100%',
// 			display: 'flex!important'
// 	  }
// 	}}>
// 		<Col 											lg={1}	md={1} 	smHidden	xsHidden /> {/* Spacer*/}
// 		<LeftContentCol						lg={4}	md={5} 	sm={6}		xs={2} />
// 		<Col 											lg={1}	mdHidden	smHidden	xsHidden />		{/* Spacer*/}
// 		<RightContentCol					lg={4}	md={5} 	sm={6}		xs={2} />
// 		{/*<TextBlockLatestUpdates		lg={4}	md={5} 	sm={6}		xs={5}/>*/}
// 		<Col 											lg={1}	md={1} 	smHidden	xsHidden>SM!</Col>
// 		<Col 											lg={1}	md={0}	smHidden	xsHidden /> {/* Spacer*/}
// 	</Row>
// );

const LeftContentCol = ({lg, md, sm, xs}) => (
	<Col lg={lg}
			 md={md}
			 sm={sm}
			 xs={xs}
			 xsHidden={false}
			 className='coldivide left'
			 id='left-content-col'
	>
		<ContentPanel
			content={contentLeft}
			title={['corporate', 'designs']}
			style={{
				theme: 'cigeraser',
				borderClass: 'ctpanel--title-border__cigeraser',
				title: 'ctpanel--title cigeraser',
			}}
		/>
		<BannerBlock container={$('#entire-grid')} />
	</Col>
);

const RightContentCol = ({lg, md, sm, xs}) => (
	<Col lg={lg}
			 md={md}
			 sm={sm}
			 xs={xs}
			 className='right-content-col-flex-wrapper coldivide right'
			 id='right-content-col'
	>
		<ContentPanel
			className=''
			content={contentRight}
			title={'latest updates'}
			style={{
				theme: 'stark',
				borderClass: 'ctpanel--title-border__stark',
				title: 'ctpanel--title stark'
			}}
		/>
	</Col>
);

export { ContentGridWrapper as ContentGrid };