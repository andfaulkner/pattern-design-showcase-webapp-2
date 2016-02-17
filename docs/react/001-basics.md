
Data propagation
----------------

*   Data passed in from a parent component is available as a 'property' on the child component e.g.

        {this.props.author}

    ... where author was defined in the parent component


props & state
-------------
*   props: static. These are characteristics of the component, they don't change
*   state: dynamic aspects of the component. E.g. is the item starred?
    *   no-nos for state: don't include:
        *   other react components
        *   computed data - do computation inside render!
        *   duplications of data from props (srsly, props should be a SSOT)


Lifecycle
---------
getDefaultProps
getInitialState
componentWillMount
render
componentDidMount

shouldComponentUpdate(nextProps, nextState)   << must return true to update
componentWillUpdate(nextProps, nextState)
render
componentDidUpdate(prevProps, prevState)



Notes
-----
*   Omitting the value of an attribute causes JSX to treat it as true
*   JavaScript expressions may be used to express children e.g.

        var content = 
	        <Container>
  		      {
	        	window.isLoggedIn
	        		? <Nav />
	        		: <Login />
    	    	}
        	</Container>;

    *   based on the value provided, either Nav or Login will render

*   NEVER EVER mutate props

				var component = <Component />;
				component.props.foo = x; // bad
				component.props.bar = y; // also bad

*   Spread attributes can be used when setting object props:

        var component = <Component {...props} />;

    *   props of the object passed in get copied onto the component's props

Comments
--------
<Person
  /* multi
     line
     comment */
  name={window.isLoggedIn ? window.name : ''} // end of line comment
/>
