/**************************************************************************************************
*
*			Content: Home page
*
*/

var React = React || require('react');
var logger = require('../../../helpers/logger.js')('components/Content/Home.jsx');
import Carousel from './CarouselGallery/Carousel.jsx';
import { ContentGrid } from './ContentGrid/ContentGrid';
import { setCurrentPage } from '../../../store/actions/actions.jsx';
import {connect} from 'react-redux';

@connect()
export class Home extends React.Component {

	constructor(props) {
		super(props);
  	this.props.dispatch(setCurrentPage('Home'));
	}

	render() {
		return (
			<div>
				<Carousel/>
				<ContentGrid />
			</div>
		);
	}
};