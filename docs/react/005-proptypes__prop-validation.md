Prop Validation
===============

propTypes {Object} property on component class: pseudo-static typing
--------------------------------------------------------------------

*   specify validators that ensure the data props a component receives are valid
*   all are optional by default
*   vast number of parameters receivable by proptypes

### basic usage
		React.createClass({
			propTypes: {
			  //...various proptypes go in here
			}
		})

### ensure props are specific JS primitives

		React.createClass({
			propTypes: {
			  someRequiredArrayProp: 				React.PropTypes.array.isRequired,
			  someRequiredStringProp: 			React.PropTypes.string.isRequired,
			  someRequiredBoolProp: 				React.PropTypes.bool.isRequired,
			  someOptionalFunctionProp: 		React.PropTypes.func,
			  someOptionalNumberProp: 			React.PropTypes.number,
			  someOptionalObjectProp: 			React.PropTypes.object
			}
		});

### make a prop mandatory, regardless of type

		React.createClass({
			propTypes: {
			  someMandatoryProp: 						React.PropTypes.any.isRequired
			}
		});

### ensure prop is a React element

		React.createClass({
			propTypes: {
			  someRequiredReactElement: 		React.PropTypes.element.isRequired
			}
		});

### ensure prop is some sort of "renderable" item: 
    *   string, number, React element, or array (or fragment) containing these types

		React.createClass({
			propTypes: {
			  someRequiredRenderableItem: 	React.PropTypes.node.isRequired
			}
		});

### ensure prop contains a collection with certain specific characteristics

		React.createClass({
			propTypes: {
				someOptionalInstanceOfClass:	React.PropTypes.instanceOf(SomeClass),
				anOptionalArrayOfValsOfType:	React.PropTypes.arrayOf(React.PropTypes.number),
				anOptionalObjWithPropsOfType:	React.PropTypes.objectOf(React.PropTypes.string),
				someOptionalObjWithShape:			React.PropTypes.shape({
																				color: 		React.PropTypes.string,
																				fontSize: React.PropTypes.number
																			})
			}
		});


### ensure prop adheres to one of several options (akin to an enum or a 'generic')

		React.createClass({
			propTypes: {
				someOptionalEnum: 							React.PropTypes.oneOf(['News', 'Photos']),
				anOptionalPropOfAnyTypeInList:	React.PropTypes.oneOfType({
					React.PropTypes.string,
					React.PropTypes.number
				})
			}
		});


Allow only 1 child passed to component
--------------------------------------

		var MyComponent = React.createClass({
		  propTypes: {
		    children: React.PropTypes.element.isRequired // << only 1 this.props.children now allowed
		  },

		  render: function() {
		    return (
		      <div>
		        {this.props.children} // <<< must be exactly 1 element or it'll warn
		      </div>
		    );
		  }

		});


Default property values
-----------------------

		var ComponentWithDefaultProps = React.createClass({
			getDefaultProps: function() {
				return {
					value: 'default value'
				}
			},
			/* ... */
		});

*   value will now be equal to 'default value' if no value prop is declared