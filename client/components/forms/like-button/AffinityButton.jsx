var React = React || require('react');;
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';

import Common from '../../aRefactor/Common/Common.jsx';

const data = {
	affinities: {
		'-3': 'are madly in love with',
		'-2': 'have a great liking for',
		'-1': 'feel positively towards',
		'0': 'are indifferent to',
		'1': 'are annoyed by',
		'2': 'dislike',
		'3': 'hate'
	},
	affinityImgStyle: {
		marginLeft: '15px',
		marginRight: '15px',
		display: 'inline',
		width: '25px',
		height: '25px'
	}
};

export const AffinityButton = React.createClass({
	getInitialState: () => ({ affinity: 0 }),
	// runs when element with onClick={this.handleHateClick} prop is clicked
	handleLoveClick: function(event) {
		var affinity = (this.state.affinity > -3)
			? this.state.affinity -1
			: this.state.affinity
		this.setState({affinity: affinity}); // inverts state
	},
	// runs when element with onClick={this.handleHateClick} prop is clicked
	handleHateClick: function(event) {
		var affinity = (this.state.affinity < 3)
			? this.state.affinity + 1
			: this.state.affinity
		this.setState({affinity: affinity}); // inverts state
	},
	// storage for possible affinity values
	render: function() {
		var currentAffinity = _.find(data.affinities, (v, k) => (+k === this.state.affinity));
		return (
			<Common>
				You {currentAffinity} this.
				<div style={{display: 'block'}}>
					<img
						src="./img/dislike.svg" 
						style={data.affinityImgStyle} 
						onClick={this.handleHateClick}
					/>
					<img 
						src="./img/like.svg"
						style={data.affinityImgStyle}
						onClick={this.handleLoveClick}
					/>
				</div>
			</Common>
		);
	}
});