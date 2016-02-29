var logger = require('../../../helpers/logger.js')('components/Common/TopLogo.jsx');

var styles = {
	topLogo: {
		textAlign: 'center',
		marginBottom: '5px',
		backgroundColor: 'white'
	}
};

export default class TopLogo extends React.Component {
	render() {
		logger.logRendering('TopLogo').inspect(this.props);
		return (
			<div style={styles.topLogo}>
				<img src="./img/logo.png" />
			</div>
		);
	}
};