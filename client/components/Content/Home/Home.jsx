/**************************************************************************************************
*
*			Content: Home page
*
*/

var React = React || require('react');
var logger = require('../../../helpers/logger.js')('components/Content/Home.jsx');
import Carousel from './Carousel.jsx';
import { ContentGrid } from './TextContent/ContentGrid';

export default class Home extends React.Component {
	render() {
		logger.logRendering('Home').inspect(this.props);
		return (
			<div>
				<Carousel/>
				<ContentGrid />
			</div>
		);
	}
};