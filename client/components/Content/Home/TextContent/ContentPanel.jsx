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

export const ContentPanel = ({content, title, style, ...props}) => (
	<Row id='content-panel'>
		<ContentPanelTitle {...props}
			title={title}
			titleStyle={style.title}
		/>
		<ContentPanelContent {...props}
			style={style}
			content={content}
		/>
	</Row>
);

const ContentPanelTitle = ({title = '', titleStyle='ctpanel--title', ...props}) => (
	<div className={titleStyle}>
		{_.isArray(title)
			? title.map(titlePart => <Row className='ctpanel--title-multirow'> {titlePart} </Row>)
			: <Row className='ctpanel--title-one-row-only'> {title} </Row>}
	</div>
);

const ContentPanelContent = ({content, style, ...props}) => (
	<div className={ 'ctpanel--content ' +	style.borderClass +	' ' + style.theme }>
		{ content.description ? <ContentPanelDescription description={content.description} /> : '' }
		{ content.designs.map(
			design => (<ContentPanelContentSection design={design} />)
		)}
		<ContentPanelSeeMoreButton />
	</div>
);


const ContentPanelSeeMoreButton = () => (
	<Row className='ctpanel--see-more-button-row'>
		<button className='ctpanel--see-more-button'>see more >></button>
	</Row>
);

const ContentPanelDescription = ({description}) => (
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
						{this.props.design.company}
					</Row>
					<Row className='ctpanel--content-section__title-row'>
						&nbsp;| {this.props.design.project}
					</Row>
					<Row className='ctpanel--content-section__date'>
						{this.props.design.datecomplete}
					</Row>
				</Row>
			</Row>
		);
	}
});