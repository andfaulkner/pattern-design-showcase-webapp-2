/**************************************************************************************************
*
*			Renders content blocks - e.g. corporate designs, latest updates
*			Below nav menu, & carousel in home page
*			
*/

// REACT
var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');

// REACT HELPERS - ROUTING, STYLES, COMPONENTS
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Row } from 'react-bootstrap';
var classNames = require('classnames');
import { setCurrentPage } from '../../../../store/actions/actions.jsx';
import {connect} from 'react-redux';

export class ContentPanel extends React.Component {

	/**
	 * Set the width of this component to always be equal to the width of another specified
	 * component, based on the value of matchWidthById, which should receive an id with which
	 * to grab the component to match. Note that this is currently set up to turn on when
	 * the window is 'small' (below 768px on either height or width) - but could be retooled
	 * to work more generally.
	 */
	matchWidthWhenSmall = () => {
  	this.setState({windowWidth: window.innerWidth});
		if (!this.props.matchWidthById) {
			return;
		}
		if (window.innerHeight < 768 && window.innerWidth < 768) {
			this.hasRunReset = false;
			this.el.style.width = this.elToMatch.getBoundingClientRect().width + 'px';
		// reset the width value, but don't reset again until the size drops below 768 again
		} else if (!this.hasRunReset) {
			this.hasRunReset = true;
			this.el.style.width = '';
		}
	}

	/**
	 * Set the width after rendering. This is important to ensure it matches its sibling panels.
	 */
	componentDidMount = () => {
		if (this.props.matchWidthById && this.props.id) {
			this.hasRunReset = true;
			this.el = document.getElementById(this.props.id);
			this.elToMatch = document.getElementById(this.props.matchWidthById);
			window.addEventListener('resize', this.matchWidthWhenSmall);
			this.matchWidthWhenSmall();
		}
	}

	render() {
		const { title, style, matchWidthById, content, ...otherProps} = this.props;
		return (
			<Row id={this.props.id}
					 className={classNames('content-panel', otherProps.theme)}
			>
				<CPanelTitle
					title={title}
					titleStyle={style.title}
					matchWidthById={matchWidthById}
				/>
				<CPanelContent
					style={style}
					content={content}
					{...otherProps}
				/>
			</Row>
		);
	}
};

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
const CPanelContent = ({content, style, ...otherProps}) => (
	<div className={ 
		classNames('ctpanel--content', style.borderClass, otherProps.theme)
	}>
		{content.description
			? <CPanelDescription description={content.description} />
			: ''
		}
		{content.designs.map(design => (
				<CPanelContentItem design={design} spacer={content.spacer} style={style} />
		))}
		<CPanelSeeMoreButton {...otherProps} />
	</div>
);

/**
 * 'See More >>' button
 * TODO load the relevant section
 * TODO get the required link passed in
 */
@connect()
class CPanelSeeMoreButton extends React.Component {

	navToParentPage = (setCurrentPage, parentPage) => {
		this.props.dispatch(setCurrentPage(parentPage));
	}

	render() {
		return (
			<Row className={classNames('ctpanel--see-more-button-row', this.props.theme)}>
				<Link
					to={this.props.parentPath}
					className={classNames('ctpanel--see-more-button', this.props.theme)}
					onClick={this.navToParentPage.bind(this, setCurrentPage, this.props.parentPage)}
				>
{/*			
				<button
					className='ctpanel--see-more-button'
					onClick={this.navToParentPage.bind(this, setCurrentPage, this.props.parentPage)}
				>
*/}
					see more >>
				</Link>
			</Row>
		);
	}
};

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
					dangerouslySetInnerHTML={{
						__html: spacer + line2
					}}
				/>)
			: ''
	}</div>
);
