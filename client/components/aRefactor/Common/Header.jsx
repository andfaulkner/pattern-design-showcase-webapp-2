export default class Header extends React.Component {
	render() {
		console.log(' ****** Header rendering');
		console.log(this.props);
		return (
			<div>
				<img src='/img/logo.png' />
			</div>
		);
	}
};
