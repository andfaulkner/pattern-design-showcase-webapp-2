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
	spacer: '&nbsp;| ',
	description: `Available for hire to make your web, print, ads, or anything
								at all into a beautiful whirl of color`,
	designs: [
		{
			line1: 'backupbrain inc.',
			line2: 'web banners',
			datecomplete: '09/03/2016',
			link: ''
		},
		{
			line1: 'Jaymes White Entertainment',
			line2: 'company logo',
			datecomplete: '01/01/2016',
			link: ''
		}
	]
};

// TODO fetch the content from here, set it up to be grabbed via AJAX 
const contentRight = {
	spacer: '',
	designs: [
		{
			line1: 'new pattern: cornstarch and too much fidgeting',
			datecomplete: '09/03/2016',
			link: ''
		},
		{
			line1: '"I reach, you flow: The collected works of Tamara Jurchuk" published',
			datecomplete: '09/03/2016',
			link: ''
		},
		{
			line1: 'new pattern: spin-out without a windy day',
			datecomplete: '02/12/2023',
			link: ''
		}

	]
};


const ContentGridWrapper = () => (
	<Grid fluid={true} className="contentgrid-area" id='content-grid'>
		<Col								lg={1}	md={1}	sm={1}		xs={1}><Row /></Col>
		<Col 								lg={10}	md={10}	sm={10}		xs={10}>
			<ContentGrid />
		</Col>
		<Col								lg={1}	md={1} 	sm={1}		xs={1}><Row /></Col>
	</Grid>
);

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
				<Col 								lg={1}		md={1} 		smHidden				xs={2} />			 		{/* Spacer*/}
				<LeftContentCol			lg={4}		md={5} 		sm={5}					xs={8} />
				<Col 								lg={1}		mdHidden	smHidden				xs={2} />			 		{/* Spacer*/}
				<Col 								lgHidden	mdHidden	smHidden				xs={3} />			 		{/* Spacer*/}
				<RightContentCol		lg={4}		md={5} 		sm={5}					xs={7} />
				<SocialMediaIcons		lg={1}		md={1} 		smHidden={true}	xsHidden={true}/>
				<Col 								lg={1}		md={0}		smHidden				xs={2} />			 		{/* Spacer*/}
			</Row>
		);
	}
};

var SocialMediaIcons = React.createClass({
	render: function() {
		let {smHidden, xsHidden, ...other} = this.props;
		return (
			<Col
			 	smHidden={!!smHidden}
			 	xsHidden={!!xsHidden}
				lg={1}
				md={1}
			>
				Icons here!
			</Col>
		);
	}
});


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
				title: 'ctpanel--title stark',
				contentMargin: 'ctpanel--content-margin'
			}}
		/>
	</Col>
);

export { ContentGridWrapper as ContentGrid };