var FilterableProductTable = React.createClass({
	render: function() {
		return (
			
		);
	}
});

var ProductCategoryRow = React.createClass({
	render: function() {
		return (
			<tr><th colSpan="2">{this.props.category}</th></tr>
		);
	}
});


var ProductRow = React.createClass({
	// propTypes: {

	// }
	render: function() {
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});


var ProductTable = React.createClass({
	render: function() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
});
