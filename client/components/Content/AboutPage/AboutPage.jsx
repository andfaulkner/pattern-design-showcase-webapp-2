var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { getContent } from '../../lib/decorators.jsx';
import { setCurrentPage } from '../../../store/actions/actions.jsx';
var classNames = require('classnames');
import { Title } from '../../lib/UtilityComponents.jsx';


@getContent()('bio')
export class AboutPage extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(setCurrentPage('About'));
	}

	componentDidMount = () => {
		this.props.getContent('bios');
	}

	render() {
		const {content, ...otherProps} = this.props;
		console.log('AboutPage.jsx:: AboutPage::render: content:', content);
		return (
			<div className={classNames('about')}>
				<Title title='About'/>
				<div className={classNames('about__content-section')}>
					{
						_.get(content, 'bios.items[0]')
							? <AboutLeftCol content={content}/> 
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
		<img src='/img/other/owl.jpg' />
	</div>
);

const AboutLeftCol = ({content}) => {
	console.log('AboutPage.jsx:: AboutLeftCol:: content:', content);
	return (
		<div className={classNames('about__left-col')}>
			<div className={classNames('about__left-col--inner')}>
				<div className={classNames('about__left-col--text-wrapper')}>
					{
						content.bios.items[0].aboutParagraph.map((paragraph) => (
							<div className={classNames('about__left-col--text')}>
								{paragraph}
							</div>
						)) 
					}
				</div>
			</div>
		</div>
	)
};