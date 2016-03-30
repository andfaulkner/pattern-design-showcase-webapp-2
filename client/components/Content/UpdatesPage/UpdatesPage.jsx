var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
var classNames = require('classnames');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { connect } from 'react-redux';
import { setCurrentPage, selectContentType, fetchContentIfNeeded } from '../../../store/actions/actions.jsx';
import { getContent } from '../../lib/decorators.jsx';
import { Title } from '../../lib/UtilityComponents.jsx';

@getContent()('updates')
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
			<div className='updates'>
				<div>
					<Title title='Updates' />
					<UpdatesContentBox content={content} {...otherProps} />
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
		console.log(data);
		var rightToLeft = false;
		console.log('this.rightToLeft: ', this.rightToLeft);

		// TODO random image if none given
		const updates = _.map(data, (update) => {
			rightToLeft = !rightToLeft;
			return (rightToLeft)
				? (<div className={classNames('updates--block')}>
						{update.image ? <UpdateImage src={update.image} /> : ''}
						<ContentCol updateData={update} />
					</div>)
				: (<div className={classNames('updates--block')}>
						<ContentCol updateData={update} />
						{update.image ? <UpdateImage src={update.image} /> : ''}
					</div>)
		});
		return (<div>{updates}</div>)
	}

};

const ContentCol = ({updateData}) => (
	<div className={classNames('updates--block--right-col')}>
		<ContentColTitle updateData={updateData} />
		<ContentContainer content={updateData.textContent} />
	</div>
);

const ContentContainer = ({content}) => {
	return (
		<div className={classNames('updates--block--content__container')}>
			<div className={classNames('updates--block--content')}>
				{content}
			</div>
		</div>
	);
};

const ContentColTitle = ({updateData}) => (
	<div>
		{(updateData.miniTitle || updateData.title)
			? <div className={classNames('updates--block--title')}>
					{_.flattenDeep([updateData.title]).map((title) => {
						return (<div className={classNames('updates--block--title')}>{title}</div>)
					})}
				</div>
			: ''}
	</div>
);

const UpdateTitle = ({displayData}) => (
	<div className={classNames('updates--block--title')}>
		{displayData}
	</div>
);

const UpdateTextContent = ({textContent}) => (
	<div className={classNames('updates--block--content')}>
		{textContent}
	</div>
);

const UpdateImage = ({src}) => (
	<div className={classNames('updates--block--left-col')}>
		<img className={classNames('updates--block--img')} src={src} />
	</div>
);



