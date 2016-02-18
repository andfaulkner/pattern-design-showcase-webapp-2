class FormBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'FormBox';
	}
	render() {
		return(
			<div style={{'textDecoration': 'underline', 'fontSize': '20px'}}>
				FormBox!
			</div>
		)
	}
}

module.exports = FormBox;