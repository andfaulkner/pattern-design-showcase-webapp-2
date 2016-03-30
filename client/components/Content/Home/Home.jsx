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
import { getContent } from '../../lib/decorators.jsx';

@getContent()('Home')
export class Home extends React.Component {

	render() {
		return (
			<div>
				<Carousel/>
				<ContentGrid />
			</div>
		);
	}
};