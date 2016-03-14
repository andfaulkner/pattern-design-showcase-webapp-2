var React = React || require('react');
var ReactDOM = ReactDOM || require('react-dom');
import { ReactRouter, Link, Router, Route, hashHistory } from 'react-router';
import Radium from 'radium';
import { Grid, Row, Col } from 'react-bootstrap'; 

const TextContentGrid = () => (
	<div className="text-content-area">
		<Grid fluid={true}>
			<Row className="show-grid">
				<Col 											lg={2}	md={2} 	sm={1}		xsHidden></Col>

				<TextBlockLeftCol 				lg={3}	md={3} 	sm={4}		xs={5}/>

				<Col 											lg={1}	lg={1}	sm={1}		xs={1}>MR</Col> 

				<TextBlockFramedVCentred	lg={3}	md={3} 	sm={4}		xs={5}/>

				<Col 											lg={1}	md={1} 	sm={1}		xs={1}>SM!</Col>
				<Col 											lg={2}	md={2}	sm={1}		xsHidden></Col>
			</Row>
		</Grid>
	</div>
);

var TextBlockLeftCol = React.createClass({
	render: function() {
		return (
			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
				<Row>
					<div className="text-block-left-col">
						<div className="text-block-left-col--title">
							MAIN-LEFT!
						</div>
					</div>
				</Row>
				<Row>
				</Row>
			</Col>

		);
	}
});

var TextBlockFramedVCentred = React.createClass({
	render: function() {
		return (
			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
				<Row>
					MAIN-RIGHT!	
				</Row>
			</Col>			
		);
	}
});


module.exports = TextContentGrid;



// const TextContentGrid = () => (
// 	<div className="text-content-area">
// 		<Grid fluid={true}>
// 			<Row className="show-grid">
// 				<Col lg={3} md={3} sm={2} xs={1}></Col>

// 				<TextBlockLeftCol lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={2} mdHidden smHidden xsHidden>MR</Col> 

// 				<TextBlockFramedVCentred lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={1} md={1} sm={1} xs={1}>SM!</Col>
// 				<Col lg={2} md={2} sm={1} xsHidden></Col>
// 			</Row>
// 		</Grid>
// 	</div>
// );
// var TextBlockLeftCol = React.createClass({
// 	render: function() {
// 		return (
// 			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
// 				<Row>
// 						MAIN-LEFT!
// 				</Row>
// 				<Row>
// 				</Row>
// 			</Col>

// 		);
// 	}
// });

// var TextBlockFramedVCentred = React.createClass({
// 	render: function() {
// 		return (
// 			<Col lg={this.props.lg} md={this.props.md} sm={this.props.sm} xs={this.props.xs}>
// 				<Row>
// 					MAIN-RIGHT!	
// 				</Row>
// 			</Col>			
// 		);
// 	}
// });

// const TextContentGrid = () => (
// 	<div className="text-content-area">
// 		<Grid fluid={true}>
// 			<Row className="show-grid">
// 				<Col lg={3} md={3} sm={2} xs={1}></Col>

// 				<TextBlockLeftCol lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={2} mdHidden smHidden xsHidden>MR</Col> 

// 				<TextBlockFramedVCentred lg={2} md={3} sm={4} xs={5}/>

// 				<Col lg={1} md={1} sm={1} xs={1}>SM!</Col>
// 				<Col lg={2} md={2} sm={1} xsHidden></Col>
// 			</Row>
// 		</Grid>
// 	</div>
// );