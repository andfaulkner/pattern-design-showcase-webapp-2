import { Input, FormControls, Row, Col, Grid } from 'react-bootstrap';

var LoginBox = React.createClass({
	render: function() {
		return (
			<div>
				<LoginFields />
			</div>
		);
	}
});

var LoginFields = React.createClass({
  render: function() {
    return (
    	<Grid><Col xs={5} md={3} md={6} className="show-grid">
				<Row><LoginTextInput hint="Enter username" caption="Username:" /></Row>
				<Row><LoginTextInput hint="Enter password" caption="Password:" /></Row>
			</Col></Grid>
    );
  }
});

var LoginTextInput = React.createClass({

  getInitialState() {
    return {
      value: ''
    };
  },

  handleChange() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },

	render: function() {
		return (
		  <Input
		    type="text"
		    value={this.state.value}
		    placeholder={this.props.hint}
		    label={this.props.caption}
		    hasFeedback
		    ref="input"
		    groupClassName="group-class"
		    labelClassName="label-class"
		    onChange={this.handleChange}
		  />
		);
	}
});


module.exports = LoginBox;