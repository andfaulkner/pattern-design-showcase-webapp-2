var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
var classNames = require('classnames');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { connect } from 'react-redux';
import { setCurrentPage, selectContentType, fetchContentIfNeeded } from '../../../store/actions/actions.jsx';
import { getContent } from '../../lib/decorators.jsx';
import { Title } from '../../lib/UtilityComponents.jsx';

@getContent()('Updates')
export class UpdatesPage extends React.Component {

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

	render() {
		const { content, ...otherProps } = this.props;
		const data = _.get(this.props, 'content.updates.items');
		var rightToLeft = false;

		// TODO random image if none given
		const updates = _.map(data, (update, index) => {
			rightToLeft = !rightToLeft;
			return (rightToLeft)
				? (
						<div 
							className={classNames('updates--block')}
							key={_.flattenDeep([update.title]) + index}
						>
							{update.image
								? <UpdateImage src={update.image} />
								: ''}
							<ContentCol updateData={update} />
						</div>
					)
				: (
						<div
							className={classNames('updates--block')}
							key={_.flattenDeep([update.title]) + index}
						>
							<ContentCol updateData={update} />
							{update.image
								? <UpdateImage src={update.image} />
								: ''}
						</div>
					)
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
					{_.flattenDeep([updateData.title]).map((title, index) => (
						<div 
							key={title + '_' + index} 
							className={classNames('updates--block--title')}
						>
							{title}
						</div>
					))}
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



