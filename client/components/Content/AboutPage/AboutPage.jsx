// var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import React, { PropTypes } from 'react';
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { getContent } from '../../lib/decorators.jsx';
import { setCurrentPage } from '../../../store/actions/actions.jsx';
var classNames = require('classnames');
import { Title } from '../../lib/UtilityComponents.jsx';


@getContent()('About')
export class AboutPage extends React.Component {

	static propTypes = {
		content: PropTypes.shape({
			bios: PropTypes.shape({
				didInvalidate: PropTypes.bool.isRequired,
				isFetching: PropTypes.bool.isRequired,
				items: PropTypes.array.isRequired,
			}).isRequired
		}).isRequired
	}

	componentDidMount = () => {
		this.props.getContent('bios');
	}

	render() {
		const {content, ...otherProps} = this.props;
		console.log('AboutPage.jsx:: AboutPage::render: content:', content);
		return (
			<div className={classNames('about')}>
				<Title title='About' />
				<div className={classNames('about__content-section')}>
					{
						_.get(content, 'bios.items[0]')
							? <AboutLeftCol children={this.props.children}>
									<AboutTextWrapper content={content} />
								</AboutLeftCol> 
							: ''
					}
					<div className={classNames('about__right-col')}>
						<div className={classNames('about__right-col--inner')}>
							<AboutImage />
							<AboutUnderImage />
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const AboutUnderImage = () => (
	<div className={classNames('about__right-col--bottom-bar')}>
		<div className={classNames('about__right-col--info')}>
			Hello I am the info section!
		</div>
		<div className={classNames('about__right-col--contact-us')}>
			Hello I am contact us!
		</div>
	</div>
);

const AboutImage = () => (
	<div className={classNames('about__right-col--image')}>
		<img src='/img/other/owl.jpg' className={classNames('about--image-size')}/>
	</div>
);

const AboutLeftCol = ({children}) => (
	<div className={classNames('about__left-col')}>
		<div className={classNames('about__left-col--inner')}>
			{children}
		</div>
	</div>
);

const AboutTextWrapper = ({content}) => {
	console.log('AboutPage.jsx:: AboutTextWrapper:: content:', content);
	return (<div className={classNames('about__left-col--text-wrapper')}>
		{
			content.bios.items[0].aboutParagraph.map((paragraph, index) => (
				<div className={classNames('about__left-col--text')} key={'aboutPara_' + index}>
					{paragraph}
				</div>
			)) 
		}
	</div>)
};