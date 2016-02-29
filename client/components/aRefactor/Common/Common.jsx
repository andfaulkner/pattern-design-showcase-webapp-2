/**************************************************************************************************
*
*			Loads up logo, title, topbar with nav menu, footer.
*			Wrap other components in this.
*
*/

import TopBar from './TopLogo.jsx';
import Footer from './Footer.jsx';
import ContentArea from './ContentArea.jsx'
import NavMenu from './NavMenu.jsx';
import TopLogo from './TopLogo.jsx';
import Radium from 'radium';

var logger = require('../../../helpers/logger.js')('components/Common/Common')

@Radium
export default class Common extends React.Component {
	render() {
		console.log(this.props)
		logger.logRendering('Common').inspect(this.props);
		return (
			<div>
				<TopLogo />
				<NavMenu />
				{/* CONTENT RENDERED HERE*/}
				{this.props.children}
				<Footer />
			</div>
		);
	}
};