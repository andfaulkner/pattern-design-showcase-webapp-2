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
var classNames = require('classnames');


export const ContentPanel = ({content, title, style, ...props}) => (
	<Row id='content-panel'>
		<CPanelTitle
			title={title}
			titleStyle={style.title}
		/>
		<CPanelContent
			style={style}
			content={content}
		/>
	</Row>
);

/**
 * Title section - block above actual content.
 *
 * @param  {String} title - displayed at the very top of the content panel
 * @param  {String} titleStyle - required to render styles in this component & children
 */
const CPanelTitle = ({ title, titleStyle='ctpanel--title' }) => (
	<div className={ titleStyle }>
		{_.isArray(title)
			? title.map(
					titlePart => (
						<Row className='ctpanel--title-multirow'> {titlePart} </Row>
					)
				)
			: <Row className='ctpanel--title-one-row-only'> {title} </Row>}
	</div>
);

/**
 * Actual content displayed in this section - includes text, surrounding 
 * margins & padding, & see more button
 *
 * @param  {Object} content - required to render actual data in this component
 * @param  {Object} style - required to render styles in this component & children
 * @return {ReactComponent} A react component object
 */
const CPanelContent = ({content, style}) => (
	<div className={ 
		classNames('ctpanel--content', style.borderClass, style.theme)
	}>
		{content.description
			? <CPanelDescription description={content.description} />
			: ''
		}
		{content.designs.map(design => (
				<CPanelContentItem design={design} spacer={content.spacer} style={style} />
		))}
		<CPanelSeeMoreButton />
	</div>
);


const CPanelSeeMoreButton = () => (
	<Row className='ctpanel--see-more-button-row'>
		<button className='ctpanel--see-more-button'>see more >></button>
	</Row>
);

/**
 * Description at top of content section. Optional.
 *
 * @param  {String} description - description itself
 */
const CPanelDescription = ({description}) => (
	<div className='ctpanel--content-description'>
		{description}
	</div>
);

/**
 * Data for a single content item. Each CPanel has several, with extras above the limit
 * visible via the See More button. Contains title & date, &  optionally a 2nd line, which
 * can also optionally include a 'spacer' to show that line 2 is a 'child' line.
 * 
 * @example spacer: '&nbsp;| ' produces the ' | ' on the 2nd line in the sample below:
 *
 *          						backupbrain inc.
 *   		           			 | web banners
 * 
 * @param  {String} tiny string / bullet to show that line 2 is a 'child' of line 1
 */
const CPanelContentItem = React.createClass({
	render: function(spacer='', style) {
		return (
			<Row className={classNames('ctpanel--content-section', this.props.style)}>
				<Row className='ctpanel--content-section__title'>
					<CPanelLine1 line1={this.props.design.line1}/>
					<CPanelLine2 line2={this.props.design.line2} spacer={this.props.spacer || ''}/>
					<CPanelDate date={this.props.design.datecomplete}/>
				</Row>
			</Row>
		);
	}
});

const CPanelDate = ({date}) => (
	<Row className='ctpanel--content-section__date'>
		{date}
	</Row>
);

const CPanelLine1 = ({line1}) => (
	<Row className='ctpanel--content-section__title-row'>
		{line1}
	</Row>
);

/**
 * 2nd line of a content block. Rendering the 'spacer' often requires escaping chars,
 * as spacers frequently include e.g. space, and other chars that are forbidden.
 *
 * @param  {String} line2 - actual text content of the line
 * @param  {String} spacer - set of chars acting as a bullet, to show line 2 is a child of line 1
 */
const CPanelLine2 = ({line2, spacer}) => (
	<div>{
		line2
			?	(<Row
					className='ctpanel--content-section__title-row'
					dangerouslySetInnerHTML={{ __html: spacer + line2 }}
				/>)
			: ''
	}</div>
);
