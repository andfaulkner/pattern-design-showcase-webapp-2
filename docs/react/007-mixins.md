Mixins
======

Create a mixin
--------------

*   mixins are basically just bundles of methods that can be inserted into React components
*   included in a component via the 'mixin' property (in array). e.g.
        mixins: [MyFirstMixin],
*   multiple mixins can be defined, just add more mixins to the array
        mixins: [MyFirstMixin, MySecondMixin],
*   if 2 mixins have the same function, both are run when it gets called, in the order added,
    followed by the method on the component (if it also overloads that method name)

### example

		var SetIntervalMixin = {
		  componentWillMount: function() {
		    this.intervals = [];
		  },
		  setInterval: function() {
		    this.intervals.push(setInterval.apply(null, arguments));
		  },
		  componentWillUnmount: function() {
		    this.intervals.forEach(clearInterval);
		  }
		};


Use a mixin on a component
--------------------------

		var TickTock = React.createClass({
		  mixins: [SetIntervalMixin], 				// <<<< Use the mixin
		  /* *** */
		});