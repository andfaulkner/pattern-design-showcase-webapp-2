var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
var classNames = require('classnames');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { connect } from 'react-redux';
import { setCurrentPage, selectContentType, fetchContentIfNeeded } from '../../../store/actions/actions.jsx';
import { getContent } from '../../lib/decorators.jsx';

@getContent()
export class UpdatesPage extends React.Component {

	constructor(props) {
		super(props);
		this.props.dispatch(setCurrentPage('Updates'));
	}

	componentDidMount = () => {
		this.props.getContent('updates');
	}

	render() {
		const { content, ...otherProps } = this.props;
		return (
			<div>
				<Title />
				<UpdatesContentBox content={content} {...otherProps} />
			</div>
		);
	}
};

class Title extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div className={classNames('updates__title-container')}>
					<div className={classNames('updates__title')}>Updates</div>
				</div>
			</div>
		);
	}
};

class UpdatesContentBox extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { content, ...otherProps } = this.props;
		console.log('UpdatesPage: this.props: ', this.props);
		const data = _.get(this.props, 'content.updates.items');
		const updates = _.map(data, (update) => (
			<div className={classNames('updates--block')}>
				{
					update.image
						?	<UpdateImage src={update.src} />
						: ''
				}
				<div className={classNames('updates--block--img-left__container')}>
					{
						update.title
							?	<UpdateTitle displayData={update.title} />
							: ''
					}
					{
						update.textContent
							?	update.textContent.map((textContent) =>
								<UpdateTextContent textContent={update.textContent} />)
							: ''
					}
				</div>
			</div>
			)
		)
		return (
			<div className={classNames('updates--block')}>
				<div className={classNames('updates--block--img-left__container')}>
					LEFT CONTAINER!
				</div>
				<div className={classNames('updates--block--right')}>
					<div className={classNames('updates--block--title')}>
						RIGHT CONTAINER TITLE!
					</div>
					<div className={classNames('updates--block--content__container')}>
						<div className={classNames('updates--block--content')}>
							RIGHT CONTAINER CONTENT!
						</div>
					</div>
				</div>
			</div>
		);
	}

};

const UpdateTitle = ({displayData}) => (
	<div className={classNames('updates--block--title')}>
		{displayData}
	</div>
);

const UpdateTextContent = ({textContent}) => (
	<div className={classNames('updates--block--title')}>
		{textContent}
	</div>
);

const UpdateImage = ({src}) => (
	<div className={classNames('updates--block--img-left__container')}>
		<img src={'/' + src}/>
	</div>
);