/**************************************************************************************************
*
*			"Corporate designs" content block - initially on left side of page
*
*/

var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Row } from 'react-bootstrap'; 

export const ContentPanel = ({content, title='', ...props}) => (
	<Row className={['ctpanel', className].join(' ')}>
		<ContentPanelTitle title={title} />
		<ContentPanelContent content={content}/>
	</Row>
);

const ContentPanelTitle = ({title}) => (
	<div className='ctpanel--title' id='contentpanel-left-title'>

		<Row className='ctpanel--title-row'> corporate </Row>
		<Row className='ctpanel--title-row'> designs </Row>
	</div>
);

const ContentPanelContent = ({content}) => (
	<div className='ctpanel--content'>
		<ContentPanelContentDescription description={content.description} />
		{content.designs.map((design) => (
			<ContentPanelContentSection 
				company={design.company}
				project={design.project}
				datecomplete={design.datecomplete}
				link={design.link}
			/>
		))}
		<ContentPanelSeeMoreButton />
	</div>
);


const ContentPanelSeeMoreButton = () => (
	<Row className='ctpanel--see-more-button-row'>
		<button className='ctpanel--see-more-button'>see more >></button>
	</Row>
);

const ContentPanelContentDescription = ({description}) => (
	<div className='ctpanel--content-description'>
		{description}
	</div>
);

var ContentPanelContentSection = React.createClass({
	render: function() {
		return (
			<Row className='ctpanel--content-section'>
				<Row className='ctpanel--content-section__title'>
					<Row className='ctpanel--content-section__title-row'>
						{this.props.company}
					</Row>
					<Row className='ctpanel--content-section__title-row'>
						&nbsp;| {this.props.project}
					</Row>
					<Row className='ctpanel--content-section__date'>
						{this.props.datecomplete}
					</Row>
				</Row>
			</Row>
		);
	}
});